import React from 'react';
import './Instuctor.css'

const Instuctor = (props) => {
    console.log(props.instuctor)
    const { name, degi, discription, img } = props.instuctor;
    return (
        <div>
            <div className="card mb-3 single-instuctor bg-dark text-light" >
                <div className="row g-0">
                    <div class="card-group">
                        <div className="col-md-4 ">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="fw-bold card-title">{name}</h5>
                                <h6 className="fw-bold">{degi}</h6>
                                <p className="card-text">{discription}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Instuctor;