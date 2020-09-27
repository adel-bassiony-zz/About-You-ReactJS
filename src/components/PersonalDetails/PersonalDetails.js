import React, { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PersonalDetails = (props) => {

    let history = useHistory();

    // ------------------------------------------------------
    // React: States
    // ------------------------------------------------------
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    
    // ------------------------------------------------------
    // Component Functions
    // ------------------------------------------------------
    const submitPersonalDetails = () => {
        props.savePersonalDetailsHandler(name, email, country, phone, password, passwordConfirmation)
        props.saveProgressHandler(33)
        history.push("/work_details");
    }

    // ------------------------------------------------------
    // Main Component View
    // ------------------------------------------------------
    return (
        <div className="container mt-5">
            <div className="col-md-8 offset-md-2">

                <h6 className="main-title">Tell us more about you</h6>

                <div className="card_block w-100 mt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-container">
                                <label className="w-100 label">Full Name</label>
                                <input className="w-100 input" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)}/>
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
                                <div className="row no-gutters">
                                    <span className="text-12 px-2 mt-3">+20</span>
                                    <div className="border-left">
                                        <label className="w-100 label">Phone Number</label>
                                        <input className="w-100 input" placeholder="Enter your phone number" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <div className="input-container">
                                <label className="w-100 label">Password</label>
                                <div className="w-100">
                                    <input className="input col-11" type={showPassword ? "text" : "password"} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                                    <button className="col-1 btn-clear px-1 opacity-50" onClick={() => setShowPassword(!showPassword)}>
                                        <img src={showPassword ? "./assets/invisible.png" : "./assets/visible.png"} width="20" className="img-fluid" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <div className="input-container">
                                <label className="w-100 label">Repeat Password</label>
                                <div className="w-100">
                                    <input className="input col-11" type={showConfirmPassword ? "text" : "password"} placeholder="Repeat your password" onChange={(e) => setPasswordConfirmation(e.target.value)} />
                                    <button className="col-1 btn-clear px-1 opacity-50" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        <img src={showConfirmPassword ? "./assets/invisible.png" : "./assets/visible.png"} width="20" className="img-fluid" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters mt-3">
                    <div className="col-md-3">
                        <a href="" className="link--dark text-14">Back To Login</a>
                    </div>
                    <div className="col-md-4 offset-md-5 mt-3 mt-md-0">
                        <button className="w-100 btn btn-primary" onClick={submitPersonalDetails}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Map Dispatch from Redux to component props
const mapDispatchToProps = dispatch => {
    return {
        savePersonalDetailsHandler: (userName, userEmail, userCountry, userPhone, userPassword, userPasswordConfirmation) => dispatch({ type: 'Save_Personal_Details', userName: userName, userEmail: userEmail, userCountry: userCountry, userPhone: userPhone, userPassword: userPassword, userPasswordConfirmation: userPasswordConfirmation}),
        saveProgressHandler: (progress) => dispatch({ type: 'Save_Progress', progress: progress}),
    };
};

export default connect(null, mapDispatchToProps)(PersonalDetails);