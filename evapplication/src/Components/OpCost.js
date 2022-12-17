import React, { useEffect, useState } from 'react';
import axios from "axios";

const OpCost = (props) => {
    console.log(props.location.state)
    const [currentVehicle, setcurrentVehicle] = useState();
    const [gasCharges, setGasCharges] = useState(3.67);
    const [electricity, setElectricity] = useState(0.128);
    const [batteryCapacity, setBatteryCapacity] = useState(40);
    const [percentageGain, setpercentageGain] = useState(0);

    const baseURL = "https://api.api-ninjas.com/v1/cars?limit=2&model=a4";
    let config = {
        headers: {
            'X-Api-Key': 'ymQM36Bllj3CzKJ6hPInlQ==bc1N59tN9Bzhge8j',
        }
    }
    useEffect(() => {
        axios.get(baseURL, config).then((response) => {
            setcurrentVehicle(response.data);
        });
        calculatePercentage()
    }, [currentVehicle]);


    function calculatePercentage() {
        if(currentVehicle && props?.location?.state?.range)
        {
            const p1 = (gasCharges / currentVehicle[0]?.combination_mpg * 0.425143707) ;
            const p2 =  (batteryCapacity / props?.location?.state?.range * 1.609 * 0.128) ;
            setpercentageGain(((p1-p2)/p1).toFixed(4))    
        }
        
    }

    return (
        <div className='container mt-5'>
            <div class="py-5 bg-light account-block">
                <h2 className="text-center m-4">Vehicle Capex Cost : ${props.location.state.price}</h2>

                <h2 class="text-center mb-1">Vehicle Operating Cost</h2>
                <p class="text-muted text-center mb-5">
                    This will show you probable Operating Cost considering analysis of your driving patterns
                </p>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center flex">
                            <form action="">
                                <table class="table table-sm table-responsive table-bordered table-striped cost-form-table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Parameters of current Vehicle</th>
                                            <th>Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mileage of your current Vehicle : (in Km/L) </td>
                                            {
                                                currentVehicle ?
                                                    <td>{currentVehicle[0]?.combination_mpg * 0.425143707}</td>
                                                    : <td></td>
                                            }
                                        </tr>
                                        <tr>
                                            <td>Fuel Price (in $): </td>
                                            <td>{gasCharges}</td>
                                        </tr>

                                        <tr>
                                            <td>Running cost per km in (in $): </td>
                                            {
                                                currentVehicle ?
                                                    <td>{gasCharges / currentVehicle[0]?.combination_mpg * 0.425143707}</td>
                                                    : <td></td>
                                            }
                                        </tr>

                                    </tbody>
                                </table>
                            </form>
                        </div>


                        <div class="col-md-6 text-center flex">
                            <form action="">
                                <table class="table table-sm table-responsive table-bordered table-striped cost-form-table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Parameters of Recommended Electric Vehicle</th>
                                            <th>Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Range of Electric Vehicle: (in km/charge) </td>
                                            {
                                                props?.location?.state ?
                                                    <td>{props?.location?.state?.range * 1.609}</td>
                                                    : <td></td>
                                            }
                                        </tr>
                                        <tr>
                                            <td>Battery Capacity (in kWh): </td>
                                            <td>{batteryCapacity}</td>
                                        </tr>
                                        <tr>
                                            <td>Electricity Rate (in $ - Subsidised Rate): </td>
                                            <td>{electricity}</td>
                                        </tr>
                                        <tr>
                                            <td>Running cost per km (in $): </td>
                                            {
                                                props?.location?.state ?
                                                    <td>{(batteryCapacity / props?.location?.state?.range * 1.609) * electricity}</td>
                                                    : <td></td>
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <h4 className="text-center m-5">Riding An Electric Vehicle
                 will Cut Down Your Expenses by :      
                    <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{percentageGain*100}
                    </span>
                    %
                </h4>
            </div>
        </div>
    );
}

export default OpCost;
