import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {selectUser} from "./store/user/user";
import {store} from "./store/store";
import HomeScreen from "./features/home/home";
import TradeScreen from "./features/trade/trade";
import PortfolioScreen from "./features/portfolio/portfolio";
import LoginScreen from "./features/login/login";
import RegisterScreen from "./features/register/register";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppContainer() {
  const user = useSelector(selectUser);

  return (
    <NavigationContainer>
      {user.isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Trade" component={TradeScreen}/>
          <Tab.Screen name="Portfolio" component={PortfolioScreen}/>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default function App() {
  return(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
