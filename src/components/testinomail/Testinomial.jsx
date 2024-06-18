import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './testinomial.scss'; // Assuming you have your SCSS file imported here

const Testinomial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great !",
      author: "Peter Lee",
      image:
        "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png",
    },
    {
      quote:
        "Plate has been an amazing service for me. Their delivery is always on time, and their food quality is superb. I'm a loyal customer!",
      author: "Emily Johnson",
      image:
        "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png",
    },
    {
      quote:
        "I love Plate! The variety of dishes they offer is impressive, and their customer service is top-notch. Highly recommended!",
      author: "John Smith",
      image:
        "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>

   
    <section className="testimonial" style={{background:"white"}}>
    <h1  className=" mainColor h1 text-center" id="pageHeaderTitle"><span className='text-white' ></span> TESTIMONIALS</h1>

      <div className="container">
        
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <ol className="carousel-indicators tabs">
              {/* Carousel indicators for tabs */}
              {testimonials.map((testimonial, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? 'active' : ''}
                  onClick={() => handleSelect(index)}
                >
                  <figure>
                    <img
                      src={testimonial.image}
                      className="img-fluid"
                      alt={`Testimonial ${index + 1}`}
                    />
                  </figure>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="carousel-wrapper">
              <h3>WHAT OUR CLIENTS SAY</h3>
              <h1>TESTIMONIALS</h1>
              <Carousel
                 activeIndex={activeIndex}
                 onSelect={handleSelect} // Added onSelect event to handle carousel item selection
                 interval={2000} // Set interval to 5000 milliseconds for auto-scroll
                 indicators={false} // Hide built-in indicators
                 pause={false} // Disable pausing on hover
              >
                {/* Carousel items */}
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <div className="quote-wrapper">
                      <p>{testimonial.quote}</p>
                      <h3>{testimonial.author}</h3>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              <ol className="carousel-indicators indicators">
                {/* Carousel indicators for carousel items */}
                {testimonials.map((testimonial, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? 'active' : ''}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    onClick={() => handleSelect(index)}
                  ></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testinomial
