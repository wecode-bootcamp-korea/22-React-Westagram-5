import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPark from "./pages/junghoon/Login/Login";
import LoginChoi from "./pages/minjae/Login/Login";
import LoginKim from "./pages/soojong/Login/Login";
import MainPark from "./pages/junghoon/Main/Main";
import MainChoi from "./pages/minjae/Main/Main";
import MainKim from "./pages/soojong/Main/Main";
import State from "./State";

import "./styles/reset.scss";
import "./styles/common.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/loginPark" component={LoginPark} />
          <Route exact path="/loginChoi" component={LoginChoi} />
          <Route exact path="/loginKim" component={LoginKim} />
          <Route exact path="/mainPark" component={MainPark} />
          <Route exact path="/mainChoi" component={MainChoi} />
          <Route exact path="/mainKim" component={MainKim} />
          <Route exact path="/map" component={State} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
