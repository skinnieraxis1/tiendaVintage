import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../img/carrousel-img-1.jpg';

import './Carrusel.css'

import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, color: black}}
        onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, color: "black"}}
        onClick={onClick}
        />
    );
}

function Carrusel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img1} />
      </div>
    </Slider>
  );
}

export default Carrusel;