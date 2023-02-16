import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import colors from "../theme/colors";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export default function Card({ id, color, name, value, percentStatus, icon, onPress }) {
  const isGrowing = percentStatus >= 0;

  return (
    <Pressable style={styles.container} onPress={() => onPress(id)}>
      <View style={styles.icon}>
        <Ionicons
          name={icon}
          color={color}
          size={15}
        />
      </View>

      <Text style={styles.title}>
        {name}
      </Text>

      <Image
        style={styles.image}
        source={{
          uri: '../assets/graph-up.svg',
        }}
      />

      <View style={styles.valuesContainer}>
        <Text style={styles.value}>{value}</Text>

        <Text style={{...styles.percent, color: isGrowing ? colors.success : colors.danger }}>
          <Ionicons
            name={isGrowing ? 'arrow-up' : 'arrow-down'}
            color={isGrowing ? colors.success : colors.danger}
            size={13}
          />
          {percentStatus}%
        </Text>
      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 145,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  icon: {

  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  image: {
    width: 80,
    height: 40,
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  percent: {
    fontSize: 16,
    fontWeight: '500',
  },
})
