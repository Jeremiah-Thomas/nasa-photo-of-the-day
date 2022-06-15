import React from "react";
import "../styles/card.css";

const Card = (props) => {
  if (!props.data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="card">
      <img src={props.data.hdurl} alt="nasa image"></img>
      <p className="copyright">Copyright: {props.data.copyright}</p>
      <h3 className="date">Date: {props.data.date}</h3>
      <p className="explanation">{props.data.explanation}</p>
    </div>
  );
};

export default Card;
