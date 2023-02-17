import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeListScreen from "./pages/home-list/HomeList";
import FundDetailScreen from "./pages/fund-detail/FundDetail";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeList"
        component={HomeListScreen}
        options={{
          title: 'HomeList',
        }}
      />

      <Stack.Screen
        name="FundDetail"
        component={FundDetailScreen}
        options={{
          title: 'Fund Detail',
        }}
      />
    </Stack.Navigator>
  );
}
