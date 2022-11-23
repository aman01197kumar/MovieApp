import React from "react";
import { MovieCard } from "./components/MovieCard";
import { MovieData } from "./utility/MovieData";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Movielist } from "./screens/Movielist";
import { About } from "./components/About";
import { Seats } from "./components/Seats";

export default function App() {
  // console.log("hello");
  function getId(id) {
    console.log(id);
  }
  return (
    <div>
      {/* <h1 className="heading">Movie list</h1> */}
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Movielist />
            </Route>
            <Route exact path="/About" id={getId} component={About}>
              <About />
            </Route>
            <Route exact path="/Seats">
              <Seats />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
