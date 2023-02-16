import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Button from '../../../components/Button';
import colors from '../../../theme/colors';

export default function HomeHeader({ value, percentStatus }) {
  const isGrowing = percentStatus >= 0;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Portfolio
      </Text>

      <View style={styles.container}>
        <View style={styles.valuesContainer}>
          <Text style={styles.value}>
            ${value}
          </Text>

          <Text
            style={{
              ...styles.percent,
              color: isGrowing ? colors.success : colors.danger,
          }}>
            <Ionicons
              name={isGrowing ? 'arrow-up' : 'arrow-down'}
              color={isGrowing ? colors.success : colors.danger}
              size={13}
            />
            {percentStatus}%
          </Text>
        </View>

        <Button
          title="Earn Rewards"
          color={colors.primary}
          backgroundColor={colors.secondary}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 95,
    flex: 0,
    width: '100%',
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightMuted,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  valuesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  percent: {
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '500',
  },
  button: {
    height: 30,
  },
  buttonLabel: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
