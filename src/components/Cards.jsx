import React from "react";
import "../index.css";

const Card = (props) => {

  return (
    <div className="game-card">
      <h2>{props.title}</h2>
      <p>{props.samQuantity} per click</p>
      <button>{props.samosa} Samosa</button>
    </div>
  );
};

export default Card;
