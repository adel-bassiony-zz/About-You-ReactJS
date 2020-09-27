import React from "react";

const Success = props => {
    return (
        <div className="container mt-5 pt-5">
            <div className="col-md-8 offset-md-2">
                <div className="card_block mt-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src="./assets/inbox.png" className="col-3 img-fluid mt-3" alt="" title="" />
                            <h1 className="title-1 mt-3">Congratz, you successfully created your account.</h1>
                            <h1 className="paragraph mt-2">We just sent you a confirmation email</h1>
                            <h1 className="paragraph">Please check your email</h1>

                            <h1 className="paragraph mt-5">Didn't receive it?</h1>
                            <p className="paragraph">Check your spam folder or <a href="/#" className="link--orange">Resend Email</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;