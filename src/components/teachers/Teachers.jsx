import './Teachers.css'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team12.jpg'
import team3 from '../../assets/team13.jpg'
export default function Teachers() {
  return (
<div className="container py-5">
<div className="section-head col-sm-12">
            <h4  ><span className=''>Meet Our</span> Mentors</h4>
          </div>
    <div className="row">
        <div className="col-md-4 col-sm-6">
            <div className="our-team">
                <img src={team1} alt='team1'/>
                <div className="team-content">
                    <h3 className="title">Williamson</h3>
                    <span className="post">Web Developer</span>
                    <ul className="social">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="our-team">
                <img src={team2} alt=''/>
                <div className="team-content">
                    <h3 className="title">Kristiana</h3>
                    <span className="post">Web Designer</span>
                    <ul className="social">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="our-team">
                <img src={team3} alt=''/>
                <div className="team-content">
                    <h3 className="title">Kristiana</h3>
                    <span className="post">Web Designer</span>
                    <ul className="social">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>  )
}
