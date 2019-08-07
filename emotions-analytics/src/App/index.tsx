import React from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>

        <h1>Scena principal</h1>
        
        
        <Routes />
      </div>
    )
  }
}