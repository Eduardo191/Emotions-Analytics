import React from "react";
import { Route, Switch } from 'react-router-dom';

//SCENES
import Home from "./Home";
import Tests from "./Tests";
import Persons from "./Persons";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/testes" component={Tests} />
        <Route path="/pessoas" component={Persons} />
      </Switch>
    )
  }
}