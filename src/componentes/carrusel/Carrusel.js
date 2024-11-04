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
          <img src="https://acdn.mitiendanube.com/stores/026/096/themes/idea/1-slide-1728497127053-1652369950-2fb028603172d054736eb30151ad3e331728497151-1920-1920.jpg?264329645" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Cartoon</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="https://www.infobae.com/new-resizer/PVDFizroT_k2950kvztAznX2A-8=/arc-anglerfish-arc2-prod-infobae/public/YLBYHRHKWJCLBLUXLI4NUBXBCM.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Rock</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/55fc228e-28de-491b-943b-3bf6a31580ff/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+How+to+Create+Sustainable+Fall+Outfits+With+The+Clothes+You+already+Own+.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Rustic</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="https://cdn.britannica.com/34/201734-050-2B1ECD3E/Dominic-Monaghan-Merry-scene-Elijah-Wood-Frodo.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">Adventure</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="https://cdn.costumewall.com/wp-content/uploads/2019/10/back-to-the-future-costumes.jpg" className="w-100"/>
          <div className="carrousel-card-body">
            <h2 className="carrousel-card-title old-standard-tt-bold">80'</h2>
            <buttom className="carrousel-card-button old-standard-tt-regular">more</buttom>
          </div>
        </div>
        <div className="carrousel-card">
          <img src="https://i0.wp.com/bamfstyle.com/wp-content/uploads/2024/10/PFVincentSuit-CL-Suit1.jpg?ssl=1" className="w-100"/>
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