import { useState } from "react";
import { useEffect } from "react";

const useCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return [courses]
};
export default useCourse;