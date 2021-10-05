import React, { useEffect, useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';

const About = () => {
    const [datas, setdatas] = useState([]);
    useEffect(() => {
        fetch('./AboutUs.json')
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])
    return (
        <div>
            <h1 className="text-light p-3">YOUTH CLUB</h1>
            <h2 className="text-light text-uppercase">inspiring <br />
                <span className="fs-1 fw-bolder p-3 text-warning fst-italic" >Positive</span><br />
                change</h2>
            <p className="text-light px-5">Youth Club (YC) is a non-profit, non-sectarian, non-political organization, which provides a unique platform for the youth and provides them avenues to channel their potential in accordance with Islamic values. Since its inception in 2011, Youth Club is working to create well-balanced individuals, who are not only skilled in their respective fields but also recognize and fulfil their religious obligations and participate actively in their communities.</p>
            <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid p-5 ">

                {
                    datas.map(data => <AboutUs
                        data={data}
                    ></AboutUs>)
                }


            </div>

        </div>
    );
};

export default About;