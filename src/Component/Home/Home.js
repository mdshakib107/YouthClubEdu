import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import HomePageCourse from '../HomePageCourse/HomePageCourse';
import useCourse from '../Hoocks/LoadCourse';

const Home = () => {
    const [courses] = useCourse();

    return (
        <div>
            <div className="">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="./img/Home/9.jpg"
                            alt="First slide"
                            height="600px"
                            width="100%"


                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/3.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"


                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/4.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/5.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/6.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/7.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/8.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/1.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-auto"
                            src="./img/Home/10.jpg"
                            alt="Third slide"
                            height="600px"
                            width="100%"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="">
                <h3 className="fs-1 m-5 fw-bold text-uppercase  text-light" >Event & Courses</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid">
                    {courses.filter(course => course.kye < 5).map(filteredCourse => (
                        <HomePageCourse
                            key={filteredCourse.kye}
                            course={filteredCourse}
                        ></HomePageCourse>
                    ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;