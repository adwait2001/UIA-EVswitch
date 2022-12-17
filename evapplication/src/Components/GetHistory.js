import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GetHistory = () => {
    const [history, sethistory] = useState();
    const URL = "http://127.0.0.1:5000/getallResults"
    useEffect(() => {
        axios.get(URL).then((response) => {
            console.log(response.data)
            sethistory(response.data);
        });
    }, []);
    return (
        <div className='row flex'>
        <h3 className='flex'> Previous Survey Results </h3>
            {history?.map((hist, index) => (
                <div className='m-3 history_card container flex'>
                    <h5 className=''>Current Vehicle : {hist?.current_vehicle?.current_manufacturer} {hist?.current_vehicle?.current_model}</h5>
                    <h5 className=''>Survey ID : {hist?.survey_id}</h5>
                    <h5 className=''>Brands Preferences (Top One) : {hist?.car_brands[0]}</h5>
                    <Link to={`quiz/results/${hist?.survey_id}`}>
                        View Detailed Results
                    </Link>
                </div>
        ))}
        </div>
    );
}

export default GetHistory;
