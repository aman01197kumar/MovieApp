import React from "react";
import { MovieCard } from "../components/MovieCard";
import { MovieData } from "../utility/MovieData";
import { useHistory } from "react-router-dom";

export const Movielist = () => {
  const history = useHistory();
  return (
    <>
      {MovieData.map((item) => {
        return (
          <>
            <MovieCard
              key={item.id}
              imgsrc={item.imgsrc}
              my_id={item.ranking}
              name={item.title}
              year={item.year}
              distributor={item.distributor}
              amount={item.amount}
              // onClick={() => history.push("/About")}
            />
            {/* <About details={item.details} /> */}
          </>
        );
      })}
    </>
  );
};
