import React, { useState } from "react";
// import "../screens/Seatbooking.css";
import { FaChair } from "react-icons/fa";
import "./Seatbooking.css";

export const Seatbooking = (props) => {
  const [array1, setArray1] = useState([]);
  const [count, setCount] = useState(0);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const list = [];
  const handleClick = (index) => {
    if (array1[index] == true) {
      setCount(count - 1);
      array1[index] = false;
      console.log(array1[index]);
    } else {
      setCount(count + 1);
      array1[index] = true;
      console.log(array1[index]);
    }
  };

  const stars = Array(64).fill(0);
  const rate = props.price * count;

  return (
    <div className="hall">
      <div className="seat">
        {stars.map((_, index) => {
          return (
            <>
              <FaChair
                key={index}
                size={24}
                onClick={() => handleClick(index, array1[index])}
                color={array1[index] === true ? colors.orange : colors.grey}
              />
            </>
          );
        })}
      </div>
      <div className="container">{list}</div>
    </div>
  );
};
