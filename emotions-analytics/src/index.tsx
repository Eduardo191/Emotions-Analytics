import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import './Styles/index.scss';
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./Reducers"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.querySelector("main")
);