import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarContainer from "./views/navbar/NavbarContainer";
import LoginContainer from "./views/login/LoginContainer";
import ExampleContainer from "./views/example/ExampleContainer";

import UserViewContainer from "./views/user/UserViewContainer";
import SalespositionContainer from "./views/salesposition/SalespositionContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarContainer />
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/user" component={UserViewContainer} />
            <Route exact path="/example" component={ExampleContainer} />
            <Route
              exact
              path="/salesposition"
              component={SalespositionContainer}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
