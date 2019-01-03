import React, { Component } from "react";
import { connect } from "react-redux";

import Orders from "./Orders";
import { fetchOrders, updateCompleted } from "./redux/thunks";

class OrderContainer extends Component {
  state = {
    isOpen: false,
    orders: [{"salesposition": "e22", "order":{"falcon": "1"}, "time": "22.03", "completed": false}, {"salesposition": "mamas", "order":{"Vitt": "1"}, "time": "18.22", "completed": true}]
  }

  async componentDidMount(){
    const {fetchOrders} = this.props;
    fetchOrders("http://localhost:3001/orders")
  }

  onCompletedClick = (orderChanged, completed) => {
    const {orders, updateCompleted} = this.props;
    console.log(updateCompleted)
    orders.forEach(order => {
      console.log('order:', order)
      // orderchanged == order
      if (orderChanged.salesposition === order.salesposition && orderChanged.time === order.time){      
        updateCompleted(order);
    }})
  }

  render() {
    const {
      orders,
      } = this.props;
    return <Orders  orders={orders} onCompletedClick={this.onCompletedClick}/>;
  }
}

const mapStateToProps = state => {
  return { orders: state.orders.orders };
};

const mapDispatchToProps = {
  fetchOrders,
  updateCompleted
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(OrderContainer);
