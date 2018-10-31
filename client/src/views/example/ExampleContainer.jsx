import React, { Component } from "react";
import { connect } from "react-redux";

import Example from "./Example";
import { exampleAction } from "./redux/actions";

class ExampleContainer extends Component {
  render() {
    const { count, exampleAction } = this.props;
    return <Example count={count} exampleAction={exampleAction} />;
  }
}

const mapStateToProps = state => {
  return { count: state.example.count };
};

export default connect(
  mapStateToProps,
  { exampleAction }
)(ExampleContainer);
