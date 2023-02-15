import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Controller} from "react-hook-form";

import Input from "./Input";

export default function Field({ control, label, name, renderChild, rules, error }) {
  const renderElement = renderChild
    ? renderChild
    : ({ field: { onChange, onBlur, value } }) => (
      <Input
        style={styles.fieldInput}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    )

  return(
    <View style={styles.fieldController}>
      <Text style={styles.fieldLabel}>{label}</Text>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={renderElement}
      />

      {!!error && (
        <Text style={styles.fieldError}>{error}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  fieldController: {
    marginBottom: 12
  },
  fieldLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#666',
    marginBottom: 7,
  },
  fieldInput: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 5,
    fontWeight: '600',
  },
  fieldError: {
    color: '#f00',
    marginVertical: 5,
  },
});
