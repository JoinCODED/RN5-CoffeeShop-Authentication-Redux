import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { List, Button, Text, Content, Icon } from "native-base";

// Components
import CoffeeItem from "./CoffeeItem";
import CartButton from "../CartButton";

class CoffeeList extends Component {
  static navigationOptions = {
    title: "Coffee List",
    headerLeft: null,
    headerRight: <CartButton />
  };

  render() {
    const { coffeeshops } = this.props.coffee;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeshop => (
        <CoffeeItem coffeeShop={coffeeshop} key={coffeeshop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffee: state.coffee
});

export default connect(
  mapStateToProps,
  {}
)(CoffeeList);
