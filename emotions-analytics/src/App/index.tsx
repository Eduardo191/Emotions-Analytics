import React from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>Scena principal</div>

        {/* Component it with SideBar Pure.Component */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pessoas">Persons</Link></li>
        </ul>
        {/* Component it with SideBar Pure.Component */}

        <Routes />
      </div>
    )
  }
}