import {StyleSheet, View} from "react-native";
import HomeHeader from "../../components/HomeHeader";
import colors from "../../../../theme/colors";
import HomeFunds from "../../components/HomeFunds";
import user from "../../../../data/user";
import {useLayoutEffect} from "react";

export default function HomeListScreen({ navigation }) {
  const { funds, portfolioPercentStatus, portfolioValue, accountValue } = user;

  const onFundPress = (fundId) => {
    navigation.navigate('FundDetail', { id: fundId });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Account: $${accountValue}`,
    });
  }, [navigation]);

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
