import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Example testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO at Company A",
    image: "https://img.freepik.com/free-photo/portrait-smiling-young-man_171337-5025.jpg",
    quote: "This service has significantly improved our workflow.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Manager at Company B",
    image: "https://img.freepik.com/free-photo/portrait-young-woman-office_23-2148327050.jpg",
    quote: "Highly recommend this product to anyone!",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Developer at Startup C",
    image: "https://img.freepik.com/free-photo/young-woman-sitting-working-cafe_23-2147989233.jpg",
    quote: "It has been a game changer for our team.",
  },
  {
    id: 4,
    name: "Bob Brown",
    title: "Designer at Agency D",
    image: "https://img.freepik.com/free-photo/confident-young-businessman-office_23-2148311612.jpg",
    quote: "Exceptional quality and support!",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
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
      {/* Decorative Images */}
      <img
        src="/myGroup.png"
        alt="Background"
        className="absolute inset-0 left-5 z-0 max-w-full max-h-[580px] hidden md:block"
      />
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
        <img src="/decorator-first.png" className="mb-[-8rem]" />
        <img src="/decorator-second.png" />
      </div>

      {/* Section Heading */}
      <h2 className="poppins-bold text-3xl sm:text-4xl text-center mb-8">
        What Our Clients Say About Us
      </h2>

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
