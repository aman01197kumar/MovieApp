import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../screens/Aboutfolder.css";
import { MovieData } from "../utility/MovieData";

export const About = () => {
  const history = useHistory();

  // const [data, setData] = useState(null);
  // const { id } = useParams();
  // // useEffect(() => {
  // //   // for (let i = 0; i < MovieData.length; i++) {
  // //   //   if (MovieData[i].id == id) {
  // //   //     setData(MovieData[i]);
  // //   //   }
  // //   // }
  // // }, []);
  // function onClickHandler(id) {
  //   const detail = MovieData.filter((item, index) => {
  //     return index === id ? { item } : null;
  //   });
  //   console.log(detail);
  // }

  return (
    <>
      {MovieData.map((item, index) => {
        return (
          <div className="body">
            {/* <h1 className="heading">{props.title}</h1> */}
            <div className="content">
              <div className="img-content">
                <img src={item.background} className="img" />
              </div>

              <div className="desc-content">
                <h2 className="sub-heading">About the Movie - {item.title}</h2>
                <div className="desc">{item.details}</div>
                <button
                  className="book-button"
                  onClick={() => history.push("/Seats")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
