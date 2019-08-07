import React from "react";
import { Route, Switch } from 'react-router-dom';

//SCENES
import Persons from "./Persons";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Persons} />
      </Switch>
    )
  }
}