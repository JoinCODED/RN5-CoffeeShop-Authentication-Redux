import React, { Component } from "react";
import { Text, Button, Icon } from "native-base";
import { connect } from "react-redux";

import { withNavigation } from "react-navigation";
import { quantityCounter } from "../../utilities/quantityCounter";

class CartButton extends Component {
  render() {
    return (
      <Button
        light
        transparent
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
      >
        <Text>
          {this.props.quantity}
          <Icon
            type="FontAwesome"
            name="coffee"
            style={{ color: "white", fontSize: 15 }}
          />
        </Text>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  quantity: quantityCounter(state.cart.items)
});

export default withNavigation(
  connect(
    mapStateToProps,
    null
  )(CartButton)
);
