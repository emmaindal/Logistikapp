import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import App from "./App";

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={configureStore()}>
          <App />
        </Provider>
      </div>
    );
  }
}

export default AppContainer;
