import React from 'react';
import {StyleSheet, TextInput} from "react-native";

export default function Input({value, onChange, onBlur, ...restProps}) {
  return (
    <TextInput
      style={styles.input}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      {...restProps}
    />
  )
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 5,
    fontWeight: '600',
  },
});
