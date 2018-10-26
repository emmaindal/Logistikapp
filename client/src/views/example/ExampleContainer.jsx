import React, { Component } from "react";
import { connect } from "react-redux";

import Example from "./Example";
import { exampleAction } from "./redux/actions";

class ExampleContainer extends Component {
  state = {
    count: 0
  };

  handleOnClick = () => {
    //destructuring
    const {
      props: { exampleAction },
      state: { count }
    } = this;

    //sets the comonent state to previous state + 1
    this.setState(prevState => ({
      count: prevState.count + 1
    }));

    //triggers the action in redux
    exampleAction(count);
  };

  render() {
    const { count } = this.props;
    return <Example count={count} handleOnClick={this.handleOnClick} />;
  }
}

const mapStateToProps = state => {
  return { count: state.example.count };
};

export default connect(
  mapStateToProps,
  { exampleAction }
)(ExampleContainer);
