import React from 'react';
import './CourseReview.css';
import client from '../../assets/team1.jpg';

export default function CourseReview() {
  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">Testimonial</div>
        <div
          id="testimonial4"
          className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
          data-ride="carousel"
          data-pause="hover"
          data-interval="5000"
          data-duration="2000"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  className="img-circle img-responsive"
                  alt="Client 1"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <h4>Client 1</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  className="img-circle img-responsive"
                  alt="Client 2"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <h4>Client 2</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  className="img-circle img-responsive"
                  alt="Client 3"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <h4>Client 3</h4>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonial4" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonial4" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
