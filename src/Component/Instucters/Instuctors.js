import React, { useEffect, useState } from 'react';
import Instuctor from '../Instuctor/Instuctor';

const Instuctors = () => {
    const [instuctors, setinstuctors] = useState();
    useEffect(() => {
        fetch('./Instuctors.json')
            .then(res => res.json())
            .then(data => setinstuctors(data))
    }, [])
    // console.log(instuctors);
    return (
        <div className="">
            <h3 className="fs-1 m-5 fw-bold text-uppercase  text-light" >OUR INSTUCTORS</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid p-5" >
                {
                    instuctors?.map(instuctor => <Instuctor
                        instuctor={instuctor}
                        key={instuctor.kye}
                    ></Instuctor>)
                }

            </div>
        </div>
    );
};

export default Instuctors;