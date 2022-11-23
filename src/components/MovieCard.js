import React from "react";
import { useHistory } from "react-router-dom";

export const MovieCard = (props) => {
  const history = useHistory();
  return (
    <div className="cards">
      <div
        className="card"
        onClick={(id) => {
          console.log("here");
          // history.push("/About");
          history.push("/About/:id");
        }}
      >
        <img src={props.imgsrc} alt="abc" className="my_img" />
        <div className="card-info">
          <h2 className="card-name">
            {props.my_id}-{props.name} ({props.year})
          </h2>
          <ul>
            <li>Distributor: {props.distributor}</li>
            <li>Amount: {props.amount}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
