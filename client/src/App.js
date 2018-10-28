import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarContainer from "./views/navbar/NavbarContainer";
import LoginContainer from "./views/login/LoginContainer";
import ExampleContainer from "./views/example/ExampleContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarContainer />
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/example" component={ExampleContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
