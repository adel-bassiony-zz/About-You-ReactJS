import React from "react";
import { useHistory, Link } from "react-router-dom";

const EmailVerification = props => {

    let history = useHistory();

    return (
        <div className="container mt-5">
            <div className="col-md-8 offset-md-2">

                <h6 className="main-title">Tell us more about you</h6>
                
                <div className="card_block mt-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src="./assets/inbox.png" className="col-2 img-fluid mt-3" />
                            <h1 className="text-orange mt-3">We will send a message for this email</h1>
                            <h3 className="mt-2">example@example.com</h3>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters mt-3">
                    <div className="col-md-2 offset-md-6 pr-1">
                        <Link to="/avatar" className="w-100 btn btn-secondary opacity-50">Back</Link>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <Link to="/success" className="w-100 btn btn-primary">Confirm</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailVerification;