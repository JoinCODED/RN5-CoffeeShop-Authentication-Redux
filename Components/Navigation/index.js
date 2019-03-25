import { createStackNavigator, createAppContainer } from "react-navigation";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";
import Login from "../Login";

const StackNav = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
