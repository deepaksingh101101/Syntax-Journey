import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Strip.css'
export default function Strip() {
    const [active, setActive] = useState("");

    const handleActive = (courseName) => {
        setActive(courseName);
    };

    const location = useLocation();
console.log(location)

    useEffect(() => {
    setActive(location?.pathname)
    }, [])
    const courses = [
        { courseId: 1, courseName: "C", to: '/course/c' },
        { courseId: 2, courseName: "C++", to: '/course/cpp' },
        { courseId: 3, courseName: "HTML", to: '/course/html' },
        { courseId: 4, courseName: "CSS", to: '/course/css' },
        { courseId: 5, courseName: "JavaScript", to: '/course/javascript' },
        { courseId: 6, courseName: "Python", to: '/course/python' },
        { courseId: 7, courseName: "Java", to: '/course/java' },
        { courseId: 8, courseName: "PHP", to: '/course/php' },
        { courseId: 9, courseName: "Ruby", to: '/course/ruby' },
        { courseId: 10, courseName: "SQL", to: '/course/sql' },
        { courseId: 11, courseName: "Swift", to: '/course/swift' },
        { courseId: 12, courseName: "Kotlin", to: '/course/kotlin' },
        { courseId: 13, courseName: "R", to: '/course/r' },
        { courseId: 14, courseName: "MATLAB", to: '/course/matlab' },
        { courseId: 15, courseName: "React", to: '/course/react' },
        { courseId: 16, courseName: "Node", to: '/course/node' },
        { courseId: 17, courseName: "Mongo", to: '/course/mongo' },
        { courseId: 18, courseName: "Bootstrap", to: '/course/bootstrap' },
        { courseId: 19, courseName: "React", to: '/course/react' },
        { courseId: 20, courseName: "React", to: '/course/react' },
    ];

    return (
        <div className="d-flex" style={{ zIndex: "99" }}>
            <ul style={{ background: "#282A35" }} className="mb-0 strip d-flex overflow-x-scroll ps-0">
                {courses.map((course) => (
                    <Link
                        onClick={() => handleActive(course?.to)}
                        to={course.to}
                        style={{ minWidth: "100px" }}
                        className={`text-center text-white py-1 stripeCourse ${active === course?.to ? "activeTab" : ""}`}
                        key={course.courseId}
                    >
                        {course.courseName}
                    </Link>
                ))}
            </ul>
        </div>
    );
}
