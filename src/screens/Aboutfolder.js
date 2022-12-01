import React from "react";
import { About } from "../components/About";
import { MovieData } from "../utility/MovieData";

export const Aboutfolder = () => {
  return (
    <>
      {MovieData.map((item) => {
        return (
          <>
            <About
              key={item.id}
              imgsrc={item.imgsrc}
              name={item.title}
              year={item.year}
              details={item.details}
              links={item.links}
            />
          </>
        );
      })}
    </>
  );
};
