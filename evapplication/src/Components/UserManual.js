import React, { useState } from 'react';


const countries = [
    { value: "1", text: "Single Family Home Owners" },
    { value: "2", text: "Multi-Family Home Owners and Tenants" },
]

const options = countries.map((option) => {
    return <option value={option.value}>{option.text}</option>
})


const components = [
    { value: "1", text: "ABB" },
    { value: "2", text: "AddEnergie" },
    { value: "3", text: "Bosch" },
    { value: "4", text: "Eaton" },
    { value: "5", text: "Fuji" },
    { value: "6", text: "Siemens" },
]

const Moreoptions = components.map((component) => {
    return <option value={component.value}>{component.text}</option>
})

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

const UserManual = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedComponent, setSelectedComponent] = useState("");

    return (
        <div className='container'>
            <section id="6" class="jsx-2890992598 light bg-theme-fill paddingTop">
                <div class="jsx-2890992598 w-full max-w-3xl mx-auto text-center">
                    <div class="styles-module--titleContainer--hqxbn text-3xl font-bold lg:text-6xl">
                        <h2>What is an Electric Vehicle?</h2>
                    </div>
                    <div class="styles-module--textContainer--sHaY0 text-center">
                        <p>There are actually three types of electric vehicles.
                            The type most people associate with “EVs,” is called a “Battery Electric Vehicle” — or “BEV.”
                            However, there are also “Hybrid Electric Vehicles” and “Plug-in Electric Vehicles,”
                        </p>
                    </div>
                </div>
            </section>
            <ColoredLine color={"white"}/>
            <h3 className='flex my-4'>Charger Selection Criteria :</h3>
            <img className='icon3' src='./charge.png' alt='' />
            <ColoredLine color={"white"}/>
            <h3 className='flex m-5'>Residential Charging Station Installations</h3>
            <p className='flex m-3'>
                Charging at home is by far the most popular option for EV owners. Convenience is high for homeowners
                who charge overnight when their vehicles are not in use and their electricity costs are much lower than
                comparable gasoline vehicle fuel expenses.
                <br />
                Many homes have ready access to power connections which reduces EVSE installation expenses. There
                are generally no concerns about availability or blocking other EV owners from charging, although
                multifamily residents living in condominiums or apartments may encounter unique issues in getting
                charging equipment installed, particularly if they do not have access to dedicated parking in proximity to
                power connections.
                <br />
                Existing 120V outlets can be used for Level 1 charging with the equipment supplied by the vehicle
                manufacturers which generally recommend the use of a dedicated 15 amp circuit with GFCI protection.
            </p>
            <label className='m-2'> Select Home Owner Type :</label>
            <select className='m-3 p-2 container' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options}
            </select>

            {
                selectedOption === "1" &&
                (
                    <div className='flexx row'>
                        <div className='col-3 flex m-5 background'>
                            <h5>Why do it?</h5>
                            <ul>
                                <li>
                                    Faster and more convenient charging for EV owners
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex m-5 background'>
                            <h5>How does it work?</h5>
                            <ul>
                                <li>
                                    May be able to use an existing outlet
                                </li>
                                <li>
                                    Usually just need one charging
                                    station in garage or driveway
                                    area on your property
                                </li>
                                <li>
                                    EV charging is treated just like
                                    an electric appliance
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex my-5 background'>
                            <h5>Installation Plan</h5>
                            <p>Select a location, ideally close
                                to existing power supplies.
                                Existing outlets with suitable
                                specifications can be used with
                                no additional wiring needed.
                                Select equipment or work with
                                contractor to choose
                                Check municipal permit
                                requirements.
                                Hire electrical contractor or
                                complete the installation
                                yourself</p>
                        </div>
                    </div>
                )
            }
            {
                selectedOption && (
                    selectedOption === "2" &&
                    (
                        <div className='flexx row'>
                            <div className='col-3 flex m-5 background'>
                                <h5>Why do it?</h5>
                                <ul>
                                    <li>
                                        Allow homeowners/tenants to
                                        charge their EVs at home
                                    </li>
                                </ul>
                            </div>
                            <div className='col-3 flex m-5 background'>
                                <h5>How does it work?</h5>
                                <ul>
                                    <li>
                                        Allow charging stations in parking
                                        areas reserved for homeowner use
                                    </li>
                                    <li>
                                        Treated just like an electric
                                        appliance
                                    </li>
                                    <li>
                                        Configuring a separate meter from
                                        power company is the most
                                        straightforward means to charge
                                        costs back to EV owners
                                    </li>
                                </ul>
                            </div>
                            <div className='col-3 flex my-5 background'>
                                <h5>Installation Plan</h5>
                                <p>Survey residents to estimate
                                    demand
                                    Select location(s), ideally close to
                                    power source
                                    Select equipment or work with
                                    contractor to choose
                                    Receive approval from property
                                    owner, condo association, etc
                                    Check municipal permit
                                    requirements .
                                    Hire electrical contractor to
                                    complete installation</p>
                            </div>
                        </div>
                    )
                )
            }

            <ColoredLine color={"white"}/>

            <h3 className='flex m-5'>Equipment specifications</h3>
            <p className='m-3'>
                <ul>
                    <h5>General Recommendations for All Charging Equipment : </h5>
                    <ol>
                        1. Compliance with Society of Automotive Engineers J-1772 and/or CHAdeMO standard for EV
                        charging plug connector dimensions and operational requirements
                    </ol>
                    <ol>
                        2. Nationally Recognized Testing Lab (e.g. Underwriters Laboratories) listed for outdoor use
                    </ol>
                    <ol>
                        3. NEMA Type 3R or 4 certification for outdoor electrical enclosures
                    </ol>
                    <ol>
                        4. Ability to operate in extreme temperature conditions (-20 to +100 degrees F)
                    </ol>
                    <ol>
                        5. Americans with Disabilities Act (ADA) accessible buttons and components
                    </ol>
                    <ol>
                        6. Warranty - Minimum 1 Year, longer desired
                    </ol>
                    <br />
                </ul>


                <ul>
                    <h5>Additional Recommendations for Public Charging Equipment : </h5>
                    <ol>
                        7. Charging amperage from 30 to 80 amps to support vehicles with higher charging power capabilities (7.2 – 19.2 kW)
                    </ol>
                    <ol>
                        8. Modular Field serviceable parts, particularly for cord and J1772 connector
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a. Minimum cord length of 20 feet
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b. Cord management system to keep cord off the ground and comply with National Electric
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Code (NEC) article 625 as it applies to cord management systems
                    </ol>
                    <ol>
                        9. Network monitoring capability for status and fault reporting
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c. Current status of charging station equipment (in-use, malfunction, etc)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d. Reporting on power consumption and usage patterns
                    </ol>
                    <ol>
                        10. Fee collection system using credit cards, access codes, phone operation and/or contactless RFID
                        cards from widespread charging network(s) with customer service assistance available 24 hours
                        a day, 7 days a week by phone.

                    </ol>
                    <br />
                </ul>
            </p>
            <label className='m-2'> Manufacturer :</label>
            <select className='m-3 p-2 container' value={selectedComponent} onChange={(e) => setSelectedComponent(e.target.value)}>
                {Moreoptions}
            </select>
            <h5 className='flex my-3'>Available Parameters : </h5>
            {
                selectedComponent === "1" &&
                (
                    <div className='flexx row'>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Charge type</h5>
                            <ul className='m-3'>
                                <li>
                                    Level 3
                                    (DC Fast
                                    Charging)
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Communications & Billing
                                Options</h5>
                            <ul className='m-3'>
                                <li>
                                    Network
                                    Communications
                                    Available
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Interfaces
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Networks
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex my-5 background'>
                            <h5 className='flex'>Mounting Options</h5>
                            <ul className='m-3'>
                                <li>Floor /
                                    Ground
                                </li>
                                {/* <li>Bollard</li>
                                <li>Wall</li>
                                <li>Overhead</li> */}
                            </ul>
                        </div>
                    </div>
                )
            }

            {
                selectedComponent === "2" &&
                (
                    <div className='flexx row'>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Charge type</h5>
                            <ul className='m-3'>
                                <li>
                                    Level 2
                                    (208/240V)
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Communications & Billing
                                Options</h5>
                            <ul className='m-3'>
                                <li>
                                    Network
                                    Communications
                                    Available
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Interfaces
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Networks
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex my-5 background'>
                            <h5 className='flex'>Mounting Options</h5>
                            <ul className='m-3'>
                                <li>Floor /
                                    Ground
                                </li>
                                <li>Bollard</li>
                                <li>Wall</li>
                                {/* <li>Overhead</li> */}
                            </ul>
                        </div>
                    </div>
                )
            }

            {
                selectedComponent === "3" &&
                (
                    <div className='flexx row'>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Charge type</h5>
                            <ul className='m-3'>
                                <li>
                                    Level 2
                                    (208/240V)
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Communications & Billing
                                Options</h5>
                            <ul className='m-3'>
                                {/* <li>
                                    Network
                                    Communications
                                    Available
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Interfaces
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Networks
                                </li> */}
                            </ul>
                        </div>
                        <div className='col-3 flex my-5 background'>
                            <h5 className='flex'>Mounting Options</h5>
                            <ul className='m-3'>
                                <li>Floor /
                                    Ground
                                </li>
                                {/* <li>Bollard</li>
                                <li>Wall</li>
                                <li>Overhead</li> */}
                            </ul>
                        </div>
                    </div>
                )
            }

            {
                selectedComponent === "4" &&
                (
                    <div className='flexx row'>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Charge type</h5>
                            <ul className='m-3'>
                                <li>
                                    Level 1
                                    (120V)
                                </li>
                                <li>
                                    Level 2
                                    (208/240V)
                                </li>
                                <li>
                                    Level 3
                                    (DC Fast
                                    Charging)
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Communications & Billing
                                Options</h5>
                            <ul className='m-3'>
                                <li>
                                    Network
                                    Communications
                                    Available
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Interfaces
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Networks
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex my-5 background'>
                            <h5 className='flex'>Mounting Options</h5>
                            <ul className='m-3'>
                                <li>Floor /
                                    Ground
                                </li>
                                {/* <li>Bollard</li> */}
                                <li>Wall</li>
                                {/* <li>Overhead</li> */}
                            </ul>
                        </div>
                    </div>
                )
            }

            {
                selectedComponent === "5" &&
                (
                    <div className='flexx row'>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Charge type</h5>
                            <ul className='m-3'>
                                {/* <li>
                                    Level 1
                                    (120V)
                                </li>
                                <li>
                                    Level 2
                                    (208/240V)
                                </li> */}
                                <li>
                                    Level 3
                                    (DC Fast
                                    Charging)
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>&nbsp;&nbsp;&nbsp; Communications & Billing
                                Options</h5>
                            <ul className='m-3'>
                                <li>
                                    Network
                                    Communications
                                    Available
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Interfaces
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Networks
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex my-5 background'>
                            <h5 className='flex'>Mounting Options</h5>
                            <ul className='m-3'>
                                <li>Floor /
                                    Ground
                                </li>
                                {/* <li>Bollard</li>
                                <li>Wall</li>
                                <li>Overhead</li> */}
                            </ul>
                        </div>
                    </div>
                )
            }

            {
                selectedComponent === "6" &&
                (
                    <div className='flexx row'>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Charge type</h5>
                            <ul className='m-3'>
                                <li>
                                    Level 1
                                    (120V)
                                </li>
                                <li>
                                    Level 2
                                    (208/240V)
                                </li>
                                {/* <li>
                                    Level 3
                                    (DC Fast
                                    Charging)
                                </li> */}
                            </ul>
                        </div>
                        <div className='col-3 flex m-5 background'>
                            <h5 className='flex'>Communications & Billing
                                Options</h5>
                            <ul className='m-3'>
                                <li>
                                    Network
                                    Communications
                                    Available
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Interfaces
                                </li>
                                <li>
                                    Billing /
                                    Payment
                                    Networks
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 flex my-5 background'>
                            <h5 className='flex'>Mounting Options</h5>
                            <ul className='m-3'>
                                <li>Floor /
                                    Ground
                                </li>
                                <li>Bollard</li>
                                <li>Wall</li>
                                {/* <li>Overhead</li> */}
                            </ul>
                        </div>
                    </div>
                )
            }
                        <ColoredLine color={"white"}/>

        </div>
    );
}

export default UserManual;
