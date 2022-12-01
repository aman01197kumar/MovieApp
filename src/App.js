import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Movielist } from "./screens/Movielist";
import { About } from "./components/About";
import { Seats } from "./components/Seats";
import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app-items">
          <Switch>
            <Route exact path="/">
              <Movielist />
            </Route>
            <Route exact path="/About/:id" component={About}>
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
