import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  List,
  Button,
  ListItem,
  Icon
} from "native-base";

// Actions
import {
  removeItemFromCart,
  checkoutCart
} from "../../store/actions/cartActions";

// Components
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  handleCheckout = () => {
    this.props.checkoutCart();
  };

  handleRemove = item => {
    this.props.removeItemFromCart(item);
  };

  render() {
    const { items } = this.props.cart;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} handleRemove={this.handleRemove} />
      ));
    }
    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.handleCheckout}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapActionsToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  checkoutCart: () => dispatch(checkoutCart())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CoffeeCart);
