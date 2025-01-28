import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import './Carousel.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    centerMode: true, // Center the current slide
    centerPadding: '0', // No padding around the center slide
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const Carousel = ({ cards }) => {
    return (
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="carousel-slide">
            <Card title={card.title} content={card.content} />
          </div>
        ))}
      </Slider>
    );
  };
  
  export default Carousel;