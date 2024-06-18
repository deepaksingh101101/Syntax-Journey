
import { Link } from 'react-router-dom';
import c from '../../assets/cLanguage.jpg'
import './card.css'

const courses = [
    {
      id: 1,
      courseName: "C Programming",
      description: "Learn the basics of programming using Python. This course covers fundamental covers fundamental. covers fundamental.",
      linkUrl: "/batch/c",
      image: c
    },
    {
      id: 2,
      courseName: "MERN Stack",
      description: "A comprehensive guide to web development, covering HTML, CSS, JavaScript, and more covers fundamental..",
      linkUrl: "/batch/mern",
      image:c
    },
    {
      id: 3,
      courseName: "Data Science",
      description: "Explore data science and machine learning techniques with Python  covers fundamental with Python .",
      linkUrl: "/batch/dataScience",
      image:c
    },
    {
      id: 4,
      courseName: "C++ Programming",
      description: "Get started with C programming and learn the fundamentals of this powerful language with Python .",
      linkUrl: "/batch/cpp",
      image: c
    },
    {
      id: 4,
      courseName: "C++ Programming",
      description: "Get started with C programming and learn the fundamentals of this powerful language with Python .",
      linkUrl: "/batch/cpp",
      image: c
    }
  ];
  


export default function Card() {
  return (
    <div className="  course-cards d-flex flex-wrap justify-content-between">
      {courses?.map((course, index) => (
        <div key={index} className="card mx-2 mb-3 " style={{width: "18rem",zIndex:"100",background:"#18151F",border:"1px solid white"}}>
          <img src={course?.image} style={{height: "200px", width: "100%"}} className="card-img-top p-2" alt={course.courseName} />
          <div className="card-body">
            <h5 className="card-title text-white ">{course?.courseName}</h5>
            <p className="card-text text-white">
              {course?.description}
            </p>
            <Link to={course?.linkUrl} className="btn buttonCss w-100">Go to Course</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
