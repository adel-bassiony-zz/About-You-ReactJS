import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Avatar = props => {

    let history = useHistory();

    // ------------------------------------------------------
    // Component Functions
    // ------------------------------------------------------

    // Register
    const register = () => {

        let requestBody = {
            "user_email": props.userEmail,
            "user_password": props.userPassword,
            "user_password_confirmation": props.userPasswordConfirmation,
            "lang": "ar",
            "created_by": null,
            "company_name": props.workName,
            "company_address": props.workAddress,
            "company_phone": props.workFirstPhone,
            "company_business_email": props.workEmail,
            "company_avatar": null,
            "company_country_id": props.workCountry,
            "company_city_id": props.workCity,
            "company_extra_data": props.userName,
            "user_full_name": props.userName,
            "user_phone": props.userPhone,
            "user_position": null,
            "user_nationality": null,
            "user_status": null,
            "user_is_admin": false,
            "user_extra_data[phone]": props.userName,
        }

        console.log(requestBody)

        axios.post('https://id.safav2.io.safavisa.com/register', requestBody)
            .then(res => {
                console.log(res)
                // props.navigation.navigate('EmailVerification')
                // props.saveProgressHandler(100)
            })
            .catch(err => {
                console.log(err.response)
                if (err.response.status === 422) {                    
                } else if (err.response.status === 500) {
                }
            })
        
        props.saveProgressHandler(100)
        history.push("/email_verification");
    }
    
    
    // ------------------------------------------------------
    // Main Component View
    // ------------------------------------------------------
    return (
        <div className="container mt-5">
            <div className="col-md-8 offset-md-2">

                <h6 className="main-title">Upload Company Logo.</h6>
                
                <div className="card_block w-100 mt-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src="./assets/add_profile_picture.png" className="col-3 img-fluid mt-3" alt="" title="" />
                            <h3 className="mt-4 text-12">Only image with a size lower than 500 KB are allowed.</h3>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters mt-3">
                    <div className="col-md-2 offset-md-6 pr-1">
                        <Link to="/work_details" className="w-100 btn btn-secondary opacity-50">Back</Link>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <button className="w-100 btn btn-primary" onClick={register}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


// Map States from Redux to component props
const mapStateToProps = state => {
    return {
        userName: state.register_reducer.userName,
        userEmail: state.register_reducer.userEmail,
        userCountry: state.register_reducer.userCountry,
        userPhone: state.register_reducer.userPhone,
        userPassword: state.register_reducer.userPassword,
        userPasswordConfirmation: state.register_reducer.userPasswordConfirmation,

        workName: state.register_reducer.workName,
        workEmail: state.register_reducer.workEmail,
        workAddress: state.register_reducer.workAddress,
        workCountry: state.register_reducer.workCountry,
        workCity: state.register_reducer.workCity,
        workFirstPhone: state.register_reducer.workFirstPhone,
        workSecondPhone: state.register_reducer.workSecondPhone,

        profilePicture: state.register_reducer.profilePicture,
    };
};

// Map Dispatch from Redux to component props
const mapDispatchToProps = dispatch => {
    return {
        saveProgressHandler: (progress) => dispatch({ type: 'Save_Progress', progress: progress}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);