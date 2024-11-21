import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    id: 1,
    title: "Item 1",
    description: "Description for item 1",
    image: "https://img.freepik.com/premium-photo/young-girl-stands-near-table-holds-marker-telephone-her-hands-table-is-magnetic-board_88135-3225.jpg?ga=GA1.1.2060787373.1732188307&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description for item 2",
    image: "https://img.freepik.com/free-vector/design-studio-concept-advert-designer-graphic-illustrator-artist-creating-modern-advertisment-digital-drawing-product-design-concept-flat-illustration-vector_613284-1825.jpg?t=st=1732188358~exp=1732191958~hmac=8294d82d7f7ee02ac07854e10c563d15eef92f60918e8f42b406e6e703c7eb8a&w=1060",
  },
  {
    id: 3,
    title: "Item 3",
    description: "Description for item 3",
    image: "https://img.freepik.com/free-vector/design-community-concept-illustration_114360-1244.jpg?t=st=1732188382~exp=1732191982~hmac=539c45d5e9df578dcd6632c63331cab37320566edeb8eeee2ef7541fbe309040&w=1380",
  },
  {
    id: 4,
    title: "Item 4",
    description: "Description for item 4",
    image: "https://img.freepik.com/premium-vector/graphic-designer-creating-his-artwork-using-computer_180264-157.jpg?w=1060",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3, // Number of items visible
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

const MyCarousel = () => {
  return (
    <div className="container mx-auto py-10">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        itemClass="carousel-item"
        renderButtonGroupOutside={true}
        showDots={true}
        arrows
        customTransition="all 0.5s"
        transitionDuration={500}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 rounded-lg shadow"
            />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;