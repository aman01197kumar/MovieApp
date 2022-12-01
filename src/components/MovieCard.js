import React from "react";
import "../screens/Movielist.css";

export const MovieCard = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} className="img-con" />
        <div className="card-info">
          <h1 className="heading-info">{props.name}</h1>
          <h3 className="heading-info">{props.distributor}</h3>
          <h3 className="heading-info">{props.amount}</h3>
        </div>
      </div>
    </div>
  );
};
