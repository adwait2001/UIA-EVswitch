
export default function HomeScreen() {
    return (
        <div>
            <div className="">
                <div className="row py-lg-5 m-0">
                    <div className="col-md-6">
                        <h1 className="fw-bold">All in One EV ToolKit which helps you switch to an Electric
                            vehicle </h1><br />
                        <p className="para">
                            We help you to make an seamless transition to an Electric vehicle.
                            <br />
                            Get finance quotes on new EVs and calculate the costs of going electric.
                            <br />
                            Analyze your current vehicle and also your driving patterns.
                            <br />
                        </p>
                        <p className="para para2">
                            <button className="btn btn-primary">Get Recommendations</button>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="evimg" src="./ev.svg" alt="" />
                    </div>
                </div>
            </div>
            <div class="py-5 bg-success partners">
                <div className="m-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 text-center flex">
                                <img src="./p1.png" alt="" />
                            </div>
                            <div class="col-md-2 text-center flex">
                                <img src="./p2.png" alt="" />
                            </div>
                            <div class="col-md-2 text-center flex">
                                <img src="./p3.png" alt="" />
                            </div>
                            <div class="col-md-2 text-center flex">
                                <img src="./p4.png" alt="" />
                            </div>
                            <div class="col-md-2 text-center flex">
                                <img src="./p5.png" alt="" />
                            </div>
                            <div class="col-md-2 text-center flex">
                                <img src="./p6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-light">
                <div className="row">
                    <div className="col-md-4 text-center p-5">
                    <img className="icon" src="./ev2.png" alt="" />
                        <h5 className="">Extract Driving Patterns</h5>
                        <p className="">An easy to use android Application will be provided to user to compute his driving patterns over a period of time</p>
                    </div>
                    <div className="col-md-4 text-center p-5">
                    <img className="icon" src="./ev4.png" alt="" />
                        <h5 className="">Create Summary and Get detailed Requirements</h5>
                        <p className="card-text">Web Interface which will provide user with detailed summary of his driving patterns and ask user some more specifics</p>
                    </div>
                    <div className="col-md-4 text-center p-5">
                        <img className="icon" src="./ev3.png" alt="" />
                        <h5 className="">Recommend an EV based on his Choices</h5>
                        <p className="">Using Smart techniques and algorithms User is suggested an electric vehicle based on his driving patterns</p>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-white solution">
                <h2 className="text-center mb-5 dark">Perfect Toolkit for Switching to an EV from your current ICEV
                </h2>
                <div className="row bg-light m-0 p-5">
                    <div className="col-md-6">
                        <img className="icon2" src="./app1.jpeg" width="70%" alt="" />
                    </div>
                    <div className="col-md-6 flex">
                        <h3 className="">Record Driving Patterns 
                        <br/> on our
                         EV Switch <br/>Mobile Application</h3>
                        <ol className="m-5">
                            <li>Register on the Application</li>
                            <li>Launch a trip while Driving</li>
                            <li> Your speed , distance Location is recorded for the trip</li>
                        </ol>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-md-6 flex">
                        <h3 className="dark">Analyze Driving Patterns</h3>
                        <p className="dark">Get Detailed stastics Report </p>
                        <ul>
                            <li className="dark">Get your speed , total distance commuted daily , top speed</li>
                            <li className="dark">Get nearest charging stations </li>
                            <li className="dark">We compute all these parameters using specialized algorithms</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img className="icon2" src="./app2.png" width="70%" alt="" />
                    </div>
                </div>
                <div class="row bg-light m-0 p-5">
                    <div class="col-md-6">
                        <img className="icon2" src="./app3.png" width="70%" alt="" />
                    </div>
                    <div className="col-md-6 flex">
                        <h2 className="">Check for User Preferences</h2>
                        <ol className="m-5">
                            <li>Ask user about his current vehicle specifications</li>
                            <li>About his brand Preferences</li>
                            <li>Some additional key informations</li>
                        </ol>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-md-6 flex">
                    <h3 className="dark">Recommend an EV and compute <br/> operational Cost</h3>
                        <ul>
                            <li className="dark">Get an EV recommended from EV database </li>
                            <li className="dark">Compute operational cost by considering driving patterns and demographics </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img className="icon2" src="./app4.jpg" width="70%" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}