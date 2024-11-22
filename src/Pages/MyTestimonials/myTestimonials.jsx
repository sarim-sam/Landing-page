// IMPORTS
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "../../data/data";


// FRONTEND
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2.5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const TestimonialCard = ({ name, title, image, quote }) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full mb-4 border-4 border-gray-300"
    />
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <p className="text-gray-700">{quote}</p>
  </div>
);

const MyTestimonials = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col items-center mt-14">
      {/* Testimonial Carousel */}
      <div className="w-full px-4">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          showDots={true}
          arrows
          containerClass="carousel-container"
          itemClass="carousel-item px-4"
          customTransition="all 0.5s"
          transitionDuration={500}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MyTestimonials;