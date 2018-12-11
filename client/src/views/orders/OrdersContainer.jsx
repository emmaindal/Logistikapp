import React, { Component } from "react";
import { connect } from "react-redux";

import Orders from "./Orders";
import { ordersAction } from "./redux/actions";

class OrderContainer extends Component {
  state = {
    isOpen: false,
    orders: ['test1', 'test2']
  }
  render() {
    const { count, ordersAction } = this.props;
    return <Orders count={count} ordersAction={ordersAction} orders={this.state.orders}/>;
  }
}

const mapStateToProps = state => {
  return { count: state.example.count };
};

export default connect(
  mapStateToProps,
  { ordersAction }
)(OrderContainer);
