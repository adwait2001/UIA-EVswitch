import React, {useState, useCallback} from 'react';
import MySurvey from '../surveyTypes/surveytypeone';
import axios from 'axios';
import uuid from 'react-uuid'
import '../../survey.css'
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";

const ResultsPage = (props) => {
    
    const [resultsLoaded, setResultsLoaded] = useState(false);
    
    const WaitingPage = () => {
        const base_url = "quiz/results/"
        const url = base_url.concat((props.id).toString());
        return(
            <div className="results-page"> 
            <img src="https://media4.giphy.com/media/darAMUceRAs0w/giphy.gif?cid=ecf05e47l627oqfx1u8isuuki775wgmyymvorlstg24gmywi&rid=giphy.gif&ct=g" />
            <div className="results-text">
            <h1>Thank you for taking the Quiz</h1>
            <h2>Exciting results on the way ... </h2>
            <Button to={url} component={Link} className="bb">Results</Button>
            </div>

            </div>
        );
    }
    
    return (
        resultsLoaded ? <div>hi</div> : <WaitingPage />
    )
};

const SurveyOne = () => {

    const [id, setId] = useState(0);
   
    const [showPage, setShowPage] = useState(true);
    const onCompletePage = useCallback((data)=> {
    const survey_id = uuid();
    const result = Object.assign({}, data, {"survey_id":survey_id});
    axios.post('http://127.0.0.1:5000/post_survey_data', JSON.stringify(result), {'Content-Type': 'application/json'}).then(response => {
    console.log("SUCCESS", response);
    }).catch(error => {
      console.log(error)
    })
    setId(survey_id);
    setShowPage(!showPage);
   },[showPage])

    return(
        showPage ? <MySurvey dd={data=>onCompletePage(data)}/> : <ResultsPage id={id}/>
    )
}

export default SurveyOne;

