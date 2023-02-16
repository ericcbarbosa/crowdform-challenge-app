import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native'
import colors from "../theme/colors";

export default function Button({
  backgroundColor = colors.primary,
  color = colors.white,
  style = {},
  labelStyle = {},
  title,
  onPress,
  ...restProps
}) {
  const buttonStyles = {
    backgroundColor: backgroundColor,
  }

  return (
    <Pressable
      title={title}
      onPress={onPress}
      style={{...styles.button, ...buttonStyles, ...style}}
      {...restProps}
    >
      <Text style={{...styles.title, ...labelStyle, color}}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 4,
    height: 52,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
})
