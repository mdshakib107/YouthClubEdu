import React from 'react';
import Course from '../Course/Course';
import useCourse from '../Hoocks/LoadCourse';

const Courses = () => {
    const [courses] = useCourse();
    return (
        <div>
            <div className="">
                <h3 className="fs-1 m-5 fw-bold text-uppercase  text-light" >Event & Courses</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid p-5">
                    {courses.filter(course => course.kye < 11).map(filteredCourse => (

                        <Course
                            key={filteredCourse.kye}
                            course={filteredCourse}
                        ></Course>
                    ))
                    }

                </div>
            </div>



        </div>
    );
};

export default Courses;