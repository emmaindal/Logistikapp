import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarContainer from "./views/navbar/NavbarContainer";
import LoginContainer from "./views/login/LoginContainer";
import ExampleContainer from "./views/example/ExampleContainer";

import UserViewContainer from "./views/user/UserViewContainer";
import SalespositionContainer from "./views/salesposition/SalespositionContainer";
import OrdersContainer from "./views/orders/OrdersContainer";

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
            <Route
              exact
              path="/orders"
              component={OrdersContainer}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
