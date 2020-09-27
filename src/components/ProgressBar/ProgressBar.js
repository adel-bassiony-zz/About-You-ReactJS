import React from 'react';
import { connect } from "react-redux";
import { Progress } from 'reactstrap';

const ProgressBar = props => {
    return (
        <div className="container mt-4">
            <div className="col-md-7 mx-auto">
                <Progress value={props.progress} className="mt-5" />
                
                <div className="steps d-flex justify-content-between">
                    <div className="step complete">
                        <img src={"./assets/user_complete.svg"} className="step__img complete" alt="" title="" />
                    </div>
                    <div className={props.progress >= 33 ? "step complete" : "step"}>
                        <img src={props.progress >= 33 ? "./assets/business_complete.svg" : "./assets/business.svg"} className={props.progress > 33 ? "step__img complete" : "step__img"} alt="" title="" />
                    </div>
                    <div className={props.progress >= 66 ? "step complete" : "step"}>
                        <img src={props.progress >= 66 ? "./assets/image_complete.svg" : "./assets/image.svg"} className={props.progress > 66 ? "step__img complete" : "step__img"} alt="" title="" />
                    </div>
                    <div className={props.progress >= 100 ? "step complete" : "step"}>
                        <img src={props.progress  >= 100 ? "./assets/shield_complete.svg" : "./assets/shield.svg"} className={props.progress >= 100 ? "step__img complete" : "step__img"} alt="" title="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Map States from Redux to component props
const mapStateToProps = state => {
    return {
        progress: state.register_reducer.progress,
    };
};

export default connect(mapStateToProps)(ProgressBar);