import React, { Component } from "react";
import { connect } from "react-redux";
class Cart extends Component {
  render() {
    return (
      <main>
        {this.props.cart.map(({ name, quantity }) => (
          <h1>
            {name} {quantity}
          </h1>
        ))}
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.item.cart,
});

export default connect(mapStateToProps, null)(Cart);
