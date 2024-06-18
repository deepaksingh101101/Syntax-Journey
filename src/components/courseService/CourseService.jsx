import React from 'react';
import './CourseService.css';

export default function CourseService() {
  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4><span>What You</span> Get?</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's<br />standard dummy text ever since the 1500s, when an unknown book.</p>
          </div>
          <FeatureItem
            icon="fa-globe"
            title="Modern Design"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa."
            customClass="feature_box_col_one"
          />
          <FeatureItem
            icon="fa-anchor"
            title="Creative Design"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa."
            customClass="feature_box_col_two"
          />
          <FeatureItem
            icon="fa-hourglass-half"
            title="Your Photoshoping"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa."
            customClass="feature_box_col_three"
          />
          <FeatureItem
            icon="fa-database"
            title="Business Growth"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa."
            customClass="feature_box_col_four"
          />
          <FeatureItem
            icon="fa-upload"
            title="Market Strategy"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa."
            customClass="feature_box_col_five"
          />
          <FeatureItem
            icon="fa-camera"
            title="Retina Ready"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa."
            customClass="feature_box_col_six"
          />
        </div>
      </div>
    </div>
  );
}

// FeatureItem component for better modularity
const FeatureItem = ({ icon, title, description, customClass }) => (
  <div className="col-lg-4 col-sm-6">
    <div className="itemService">
      <span className={`icon ${customClass}`}><i className={`fa ${icon}`}></i></span>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  </div>
);
