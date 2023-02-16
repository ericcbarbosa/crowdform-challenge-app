import { Provider, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
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
import colors from "./theme/colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppContainer() {
  const user = useSelector(selectUser);

  const getScreenOptions = () => ({
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.black,
    tabBarLabelStyle: {
      fontSize: 12,
      marginTop: -7,
    },
  });

  return (
    <NavigationContainer>
      {user.isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              ...getScreenOptions(),
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  color={color}
                  size={24}
                />
              )
            }}
          />
          <Tab.Screen
            name="Trade"
            component={TradeScreen}
            options={{
              tabBarStyle: {
                opacity: 1,
                borderTopWidth: 0,
                elevation: 0,
                shadow: 'none'
              },
              ...getScreenOptions(),
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  name={focused ? 'arrow-down-circle' : 'arrow-down-circle-outline'}
                  color={color}
                  size={24}
                />
              )
            }}
          />
          <Tab.Screen
            name="Portfolio"
            component={PortfolioScreen}
            options={{
              ...getScreenOptions(),
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  name={focused ? 'pie-chart' : 'pie-chart-outline'}
                  color={color}
                  size={24}
                />
              )
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '' }} />
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
