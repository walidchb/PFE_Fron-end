import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slide.css";

function Slide() {
  const sliderProducts = [
    "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/1943/1.jpg?3356",
    "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/3863/1.jpg?6095",
    "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/3863/1.jpg?6113",
    "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/0063/1.jpg?1826",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
  };

  return (
    <div className="slider flex h-3/6  w-full items-center justify-center rounded bg-white shadow-lg">
      {/*Images Slider*/}

      <Slider {...settings} className="w-5/6 overflow-x-visible">
        {sliderProducts.map((product, index) => (
          <div key={index} className="flex">
            <img src={product} className="h-full rounded image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
