import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import './Styles/index.scss';
import App from "./App/View";

import { Provider } from "react-redux";
import { store } from "./App/Redux"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.querySelector("main")
);