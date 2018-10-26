import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginContainer from "./views/login/LoginContainer";
import ExampleContainer from "./views/example/ExampleContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/example" component={ExampleContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
