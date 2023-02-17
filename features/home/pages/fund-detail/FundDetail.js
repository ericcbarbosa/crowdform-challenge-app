import React, {useLayoutEffect} from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import trades from "../../../../data/trades";
import colors from "../../../../theme/colors";

export default function FundDetailScreen({ navigation, route }) {
  const fund = trades.find(({ id }) => route.params.id === id);
  const isGrowing = fund.percentStatus >= 0;
  const valueIncrease = (fund.value * (fund.percentStatus/100)).toFixed(2);

  const labelsMap = {
    aum: 'AUM',
    issueDate: 'Issue Date',
    vintageRange: 'Vintage Range',
    priceAtOpen: 'Price at Open',
    priceAtClose: 'Price at Close',
    ter: 'TER',
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: fund.name,
    });
  }, [navigation]);

  const renderStats = ({ info }) => {
    return Object.keys(info).map((key) => {
      const value = info[key];
      const label = labelsMap[key];

      return {
        key,
        value,
        label,
      }
    });
  }

  return (
    <ScrollView style={styles.container} height="100%">
      <View style={styles.header}>
        <View style={styles.headerValues}>
          <Text style={styles.largeText}>${fund.value}</Text>
          <Text style={{...styles.mediumText, color: colors.success}}>
            <Ionicons
              name={isGrowing ? 'arrow-up' : 'arrow-down'}
              color={isGrowing ? colors.success : colors.danger}
              size={13}
            />
            {fund.percentStatus}% (${valueIncrease})
          </Text>
        </View>

        <Text style={styles.largeText}>{fund.year}</Text>
      </View>

      <View style={styles.graph}>
        <Image
          style={styles.graphImage}
          source={require('../../../../assets/graph-fund.png')}
          resizeMode='contain'
        />
      </View>

      <View style={styles.stats}>
        {renderStats(fund).map(({label, value, key}) => {
          return (
            <View style={styles.statsCell} key={key}>
              <Text style={styles.statsLabel}>{label}</Text>
              <Text style={styles.statsText}>{value}</Text>
            </View>
          )
        })}
      </View>

      <View style={styles.breakdown}>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 21,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
  },
  headerValues: {
    flexDirection: "column",
  },
  largeText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  mediumText: {
    fontSize: 20,
    fontWeight: '500',
  },
  graph: {
    height: 290,
  },
  graphImage: {
    flex: 1,
    width: '100%',
  },
  stats: {
    flexDirection: 'row',
    flexWrap: "wrap",
    flex: 1,
    width: '100%',
    paddingVertical: 20,
  },
  statsCell: {
    width: '50%',
    paddingBottom: 15,
  },
  statsLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.darkerMuted,
  },
  statsText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  percent: {
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '500',
  },
  breakdown: {

  },
});
