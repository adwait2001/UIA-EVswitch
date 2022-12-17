// import React from 'react';
// import LocationMap from '../Map';

// const Stats = () => {
//     return (
//         <div class="container">
//             <h1 class="title mb-5">
//                 Driving statistics
//             </h1>
//             <div>
//                 <div class="error"></div>
//                 <div class="info"></div>
//                 <div class="mb-5">
//                     <select name="countries" id="countries" class="form-control">
//                         <option value="all">General Commute Path</option>
//                     </select>
//                 </div>
//                 <div class="country-stats">
//                     <div class="row">
//                         <div class="col-sm-4">
//                             <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title">Top Speed : 39mph </h5>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-sm-4">
//                             <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title">Distance Travelled Daily : 20-30 Km</h5>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-sm-4">
//                             <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title">Total Trips : 500 </h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <LocationMap/>
//                     </div>
//                     <div class="row">
//                         <div class="col-sm-12 mt-4">Data updated on: 16/11/2022 </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import LocationMap from '../Map';

const Stats = () => {
    return (
        <div class="flex">
            <div className='container'>
            <LocationMap />
            </div>
            <div className='abs flex'>
                <h5 className='bg-light m-5 p-2'>If there are no charging stations near You We got you Covered : 
                    <Link to={'/manual'}>
                        View our User Manual
                    </Link>
                </h5>
            </div>
        </div>
    );
}


export default Stats;
