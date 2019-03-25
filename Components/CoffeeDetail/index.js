import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

// Actions
import { addItemToCart } from "../../store/actions/cartActions";
import CartButton from "../CartButton";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("shop", {}).name,
    headerRight: <CartButton />
  });

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  handleAdd = () => {
    const { items } = this.props.cart;
    let item = {
      ...this.state,
      quantity: 1
    };
    this.props.addItemToCart(item, items);
  };

  render() {
    const coffeeshop = this.props.navigation.getParam("shop", {});
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger onPress={this.handleAdd}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapActionsToProps = dispatch => ({
  addItemToCart: (item, cart) => dispatch(addItemToCart(item, cart))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CoffeeDetail);
