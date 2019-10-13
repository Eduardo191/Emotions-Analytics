import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import './Styles/index.scss';
import App from "./App/View";

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
  , document.querySelector("main")
);