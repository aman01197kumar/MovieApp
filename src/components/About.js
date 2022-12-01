import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../screens/Aboutfolder.css";
import { MovieData } from "../utility/MovieData";
export const About = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("id -->", id);
    for (let i = 0; i < MovieData.length; i++) {
      if (MovieData[i].id == id) {
        console.log(MovieData[i].id, id);
        setData(MovieData[i]);
      }
    }
  }, []);
  const style_2 = {
    backgroundImage: `url(${data.backgroundimg})`,
    backgroundPosition: " center no-repeat",
    backgroundSize: "cover",
    height: "31rem",
  };

  return (
    <>
      {data ? (
        <div className="body" style={style_2}>
          <div className="content">
            <div className="img-content">
              <img src={data.imgcard} className="img" />
            </div>

            <div className="desc-content">
              <h2 className="sub-heading">About the Movie - {data.title}</h2>
              <div className="desc">{data.details}</div>
              <button
                className="book-button"
                onClick={() => history.push("/Seats")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
