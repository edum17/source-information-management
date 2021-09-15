import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/colors.scss";
import "./styles/fonts.scss";

import Navbar from "./components/navbar";
import NunsList from "./components/nun-list";
import NunEdit from "./components/nun-edit";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <React.Fragment>
          <Route path="/" exact>
            <NunsList />
          </Route>
        </React.Fragment>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
