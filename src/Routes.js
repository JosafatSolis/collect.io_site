import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from './components/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/home/" component={Home} />  
  </Switch>
);

export default Routes;