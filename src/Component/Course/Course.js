import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, speaker, audience, discription, time, venue, img, price } = props.course;
    return (
        <div>
            <div className="card mb-3  single-course bg-dark text-light" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h5 className="fw-bold card-title">{name}</h5>
                            <h6 className="fw-bold">{speaker}</h6>
                            <p className="card-text">{venue}</p>
                            <p className="card-text">{discription}</p>
                            <p className="card-text"><small className="text-muted fw-bold">{time}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;