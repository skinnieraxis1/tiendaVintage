import React from "react";
import "./CardSqueme.css";

function CardSqueme(props) {
  return (
    <div className="Card-squeme">
      <div className="card-squeme-title">
        <h2 className="old-standard-tt-regular">{props.title}</h2>
      </div>
      <div className="card-squeme-body">
        {props.cardTitle.map((title, index) => (
          <div onClick={() => props.onCardSelect(props.genres[index])}
            key={index} 
            className="squeme-card" 
            style={{ backgroundImage: `url(${props.photo_icon[index]})` }}
          >
            <div className="squeme-card-title">
              <h3 className="bebas-neue-regular">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSqueme;
