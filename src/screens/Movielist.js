import React from "react";
import { MovieCard } from "../components/MovieCard";
import { MovieData } from "../utility/MovieData";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Movielist = () => {
  const history = useHistory();
  return (
    <>
      {MovieData.map((item) => {
        return (
          <>
            <Link to={"/About/" + item.id}>
              <MovieCard
                key={item.id}
                imgsrc={item.imgsrc}
                my_id={item.ranking}
                name={item.title}
                year={item.year}
                distributor={item.distributor}
                amount={item.amount}
              />
            </Link>
          </>
        );
      })}
    </>
  );
};
