import Navbar from "../navbar/Navbar";
import mern from '../../assets/mern.jpg'
import CourseService from "../courseService/CourseService";
import Sylabus from "../sylabus/Sylabus";
import Teachers from "../teachers/Teachers";
import CourseReview from "../courseReview/CourseReview";
import Card from "../card/Card";
import Footer from "../footer/Footer";
// HeroSection component for better modularity
const HeroSection = () => (
  <section className="hero-section text-white position-relative" style={{zIndex:-1, background: `url(${mern}) no-repeat center center`, backgroundSize: 'cover' }}>
    <div className="hero-mask" style={{background:"rgba(0, 0, 0, 0.6)",zIndex:1,position:"absolute",width:"100%",height:"100%",left:"0",top:"0"}}></div>
    <div className="container text-center position-relative py-5" style={{zIndex:10}}>
      <div className="single-col-max mx-auto">
        <div style={{zIndex:10}} className="fw-semibold hero-heading-upper pt-3 mb-3" >
          Promote Your Online Course <br className="d-md-none" /> Like A Pro
        </div>
        <h1 className="hero-heading mb-5">
          <span className="brand mb-4 d-block fw-bold display-3">
            <span className="text-highlight pr-2">{'{'}</span>
            <span className="name">DevCourse</span>
            <span className="text-highlight pl-2">{'}'}</span>
          </span>
          <span className="desc d-block ">A Course Landing Page Template For Developers</span>
        </h1>
        <div className="text-center mb-5">
          <a href="#section-pricing" className="btn btn-primary btn-lg scrollto">
            Start Learning Now
          </a>
        </div>
        <HeroSummary />
      </div>
    </div>
  </section>
);

// HeroSummary component for better modularity
const HeroSummary = () => (
  <div className="hero-summary">
    <div className="row">
      <SummaryItem icon="fas fa-video" title="Content" value="80+" description="Videos" />
      <SummaryItem icon="fas fa-clock" title="Duration" value="72" description="Hours" />
      <SummaryItem icon="fas fa-user-circle" title="Access" value="Lifetime" />
    </div>
  </div>
);

// SummaryItem component for better modularity
const SummaryItem = ({ icon, title, value, description }) => (
  <div className="item col-4">
    <div className="summary-desc mb-1">
      <i className={`icon ${icon} me-2`}></i>{title}
    </div>
    <h4 className="summary-heading">
      {value} <span className="desc">{description}</span>
    </h4>
  </div>
);

export default function Course() {
  return (
    <>
      <Navbar />
      <header className="header">
        <HeroSection />
      </header>
      <CourseService/>
      <Sylabus/>
      <Teachers/>
      <CourseReview/>
      <div className="d-flex py-5 flex-column " style={{background:"#1D2124"}}>
      <div className="section-head  col-sm-12 mb-3">
            <h4  ><span className='text-white'>Explore More</span> Internsship's</h4>
          </div>
      <Card/>
      </div>
      <Footer/>
    </>
  );
}
