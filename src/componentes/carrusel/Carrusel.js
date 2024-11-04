import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carrusel.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function Carrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
          margin: "1svh 0svh",
          padding: "1svh 0svh"
        }}
      >
        <ul style={{ lineHeight:"6svh", display: "inline" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          color: "transparent",
          backgroundColor: "transparent"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="carrousel-card">
          <img src="/img/carrousel-img-1.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Cartoon</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="/img/carrousel-img-2.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Rock</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="/img/carrousel-img-3.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Rustic</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="/img/carrousel-img-4.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Adventure</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="/img/carrousel-img-5.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">80'</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="/img/carrousel-img-6.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Serius</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carrusel;