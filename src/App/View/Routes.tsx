import React from "react";
import { Route, Switch } from 'react-router-dom';

//SCENES
import Home from "./Scenes/Home";
import Tests from "./Scenes/Tests";
import Persons from "./Scenes/Persons";
import TestGoingOn from "./Scenes/TestGoingOn";
import Test from "./Scenes/Tests/ChildScene/Test";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/testes" component={Tests} >
          <Route path="/testes/:testId" component={Test} />
        </Route>
        <Route path="/pessoas" component={Persons} />
        <Route path="/testando" component={TestGoingOn} />
      </Switch>
    )
  }
}