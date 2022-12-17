import time
import os
from flask import Flask
from flask import request
import json
from bson import ObjectId
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
import pymongo
from bson import json_util
import jsonpickle
#from dotenv import dotenv_values

#config = dotenv_values(".env")
app = Flask(__name__, static_folder="evapplication/build", static_url_path="")
CORS(app)

mongo = pymongo.MongoClient('mongodb://localhost:27017/', maxPoolSize=50, connect=False)
db = pymongo.database.Database(mongo, 'evandgo')
survey_col = pymongo.collection.Collection(db, 'survey_results')
car_col = pymongo.collection.Collection(db, 'electric_vehicles')

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o,ObjectId):
            return str(o)
        return json.JSONEncoder.default(self,o)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/time')
@cross_origin()
def get_current_time():
    return{'time': time.time()}

# route to post survey data to MongoDB
@app.route('/post_survey_data', methods = ['POST'])
@cross_origin()
def post_survey_data():
    d = request.get_json(force="False")
    json.dumps(d, cls=JSONEncoder)
    print(d)
    survey_col.insert_one(d)
    return 'hi'

@app.route('/getallResults', methods = ['GET'])
@cross_origin()
def getHistory():
    history = survey_col.find({})
    history_json = json.loads(json_util.dumps(history))
    print(history)
    return jsonpickle.encode(history_json)

# data to retrieve survey_data from MongoDB and return unique recommendations for survey
@app.route('/recommendations/<surveyid>', methods = ['GET'])
@cross_origin()
def recommendations(surveyid):
    survey_results = retrieve_survey_results(surveyid)
    recommendations = retrieve_valid_cars(survey_results)
    print(survey_results)
    print(recommendations)
    return recommendations

#helper recommendation functions and dictionaries 

cargo_alias = {
    "small" : [0, 30],
    "medium" : [30, 40],
    "large": [40, 100]
}

self_driving_alias = {
    "basic and limited" : False,
}

def extract_critera(json):
    try:
        return json['criteriaMet']
    except KeyError:
        return 0

def extract_rank(json):
    try:
        return json['EVRank']
    except KeyError:
        return 0

def retrieve_valid_cars(survey_results):
    print(survey_results)
    car_collections = car_col.find({})
    car_json = json.loads(json_util.dumps(car_collections))

    car_recommendations = []

    for car in car_json:
        car['criteriaMet'] = 0 

    # evaluate whether each car meets criteria
    for car in car_json:
        print(survey_results['car_brands'][0])
        crtieria_list = [
            ((car['driveTrain']).lower() == (survey_results['drivetrain']).lower()) or survey_results['drivetrain'] == "Any", #drivetrain
            (survey_results['body_style']).lower() in (car['classification']).lower(), #car type/classification
            car['seating'] >= survey_results['car_capacity'], #seating
            car['towing'] == survey_results['towing_required'], #towing
            car['price'] <= int(survey_results['budget']['max_budget']), #max price
            (car['availability']).lower() in (survey_results['availability']).lower(), #availability
            car['maxSpeed'] >= survey_results['speed'], #max speed
           # self_driving_alias[(car['selfDriving'])] == survey_results['autopilot'], #autopilot
            car['legacyOEM'] == survey_results['legacy_oem'], #legacy oem
            car['buildQuality'] >= survey_results['build_quality'], #build quality
        ]
        
        special_criteria_list = [
            (survey_results['car_brands'][0]).lower() == (car['manufacturer']).lower(), #car type/classification
        ]
        
        # add criteria score to each car
        for criteria in crtieria_list:
            if criteria:
                car['criteriaMet'] += 1
        
        for special in special_criteria_list:
            if special:
                car['criteriaMet'] += 7


        # find criteria met percentage
        car['criteriaPercentage'] = int(car['criteriaMet'] - 6 / len(crtieria_list) * 100)

        # add all cars that met at least one criteria
        if car['criteriaMet'] >= 0:
            car_recommendations.append(car)

    # sort by number of criteria met
    car_recommendations = sorted(car_recommendations, key=lambda i: ( extract_critera(i), extract_rank(i) ), reverse=True)

    #limit to 15 entries
    if len(car_recommendations) > 15:
        del car_recommendations[15:]


    return json.dumps(car_recommendations)


def retrieve_survey_results(surveyid):
    new_filter = {
        "survey_id" : surveyid
    }
    survey = survey_col.find_one(filter=new_filter)
    survey = json.loads(json_util.dumps(survey))
    return survey

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()