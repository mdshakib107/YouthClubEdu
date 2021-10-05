import React from 'react';
import './AboutUs.css'

const AboutUs = (props) => {

    const { heading, discription } = props.data;
    return (
        <div>
            <div className="">
                <div className="card border-secondary mb-3  bg-dark text-light single-data " >
                    <div className="card-header text-light fw-bold fs-5 text-uppercase">{heading}</div>
                    <div className="card-body text-secondary">
                        <p className="text-light card-text text-start">{discription}</p>
                    </div>
                </div></div>
        </div>
    );
};

export default AboutUs;