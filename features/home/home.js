import {StyleSheet, Text, View} from "react-native";
import HomeHeader from "./components/HomeHeader";
import colors from "../../theme/colors";
import HomeFunds from "./components/HomeFunds";
import user from "../../data/user";

export default function HomeScreen() {
  const { funds, portfolioPercentStatus, portfolioValue } = user;

  const onFundPress = (fundId) => {
    console.log('fundId: ', fundId)
    // navigator.navigate('Fund', { id: fundId });
  }

  return (
    <View style={styles.container}>
      <HomeHeader value={portfolioValue} percentStatus={portfolioPercentStatus} />
      <HomeFunds funds={funds} onPress={onFundPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 21,
    backgroundColor: colors.white,
  },
});
