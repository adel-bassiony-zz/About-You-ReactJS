import React, { useState } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const WorkDetails = props => {

    let history = useHistory();

    // ------------------------------------------------------
    // React: States
    // ------------------------------------------------------
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [firstPhone, setFirstPhone] = useState("")
    const [secondPhone, setSecondPhone] = useState("")

    // ------------------------------------------------------
    // Component Functions
    // ------------------------------------------------------
    const submitWorkDetails = () => {
        props.saveWorkDetailsHandler(name, address, email, country, city, firstPhone, secondPhone)
        props.saveProgressHandler(66)
        history.push("/avatar");
    }

    // ------------------------------------------------------
    // Main Component View
    // ------------------------------------------------------
    return (
        <div className="container mt-5">
            <div className="col-md-8 offset-md-2">

                <h6 className="main-title">Verify your company.</h6>

                <div className="card_block w-100 mt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-container">
                                <label className="w-100 label">Comapny Name</label>
                                <input className="w-100 input" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <div className="input-container">
                                <label className="w-100 label">Address</label>
                                <input className="w-100 input" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <div className="input-container">
                                <label className="w-100 label">Business Email</label>
                                <input className="w-100 input" placeholder="Enter your business email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2 pr-md-0">
                            <div className="input-container">
                                <label className="w-100 label">Country</label>
                                <select className="w-100 custom-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                                    <option value="" disabled>Choose your country...</option>
                                    <option value="1">Egypt</option>
                                    <option value="2">Saudi Arabia</option>
                                    <option value="3">UAE</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2">
                            <div className="input-container">
                                <label className="w-100 label">City</label>
                                <select className="w-100 custom-select" value={city} onChange={(e) => setCity(e.target.value)}>
                                    <option value="" disabled>Choose your city...</option>
                                    <option value="1">Cairo</option>
                                    <option value="2">Giza</option>
                                    <option value="3">Alexandria</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2 pr-md-0">
                            <div className="input-container">
                                <div className="row no-gutters">
                                    <span className="text-12 px-2 mt-3">+20</span>
                                    <div className="border-left">
                                        <label className="w-100 label">Phone Number</label>
                                        <input className="w-100 input" placeholder="Enter your company phone number" onChange={(e) => setFirstPhone(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2">
                            <div className="input-container">
                                <div className="row no-gutters">
                                    <span className="text-12 px-2 mt-3">+20</span>
                                    <div className="border-left">
                                        <label className="w-100 label">Phone Number</label>
                                        <input className="w-100 input" placeholder="Enter your company phone number" onChange={(e) => setSecondPhone(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row no-gutters mt-3">
                    <div className="col-md-2 offset-md-6 pr-1">
                        <Link to="/" className="w-100 btn btn-secondary opacity-50">Back</Link>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <button className="w-100 btn btn-primary" onClick={submitWorkDetails}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Map Dispatch from Redux to component props
const mapDispatchToProps = dispatch => {
    return {
        saveWorkDetailsHandler: (workName, workEmail, workAddress, workCountry, workCity, workFirstPhone, workSecondPhone) => dispatch({ type: 'Save_Work_Details', workName: workName, workEmail: workEmail, workAddress: workAddress, workCountry: workCountry, workCity: workCity, workFirstPhone: workFirstPhone, workSecondPhone: workSecondPhone }),
        saveProgressHandler: (progress) => dispatch({ type: 'Save_Progress', progress: progress}),
    };
};

export default connect(null, mapDispatchToProps)(WorkDetails);