import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';

import Input from './Input';
import colors from '../../theme/colors';

export default function Field(props) {
  const {
    control,
    label,
    name,
    render,
    rules,
    error,
    ...restProps
  } = props;

  const renderElement = render
    ? render
    : ({ field: { onChange, onBlur, value } }) => (
      <Input
        style={styles.fieldInput}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        {...restProps}
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
    color: colors.darkerMuted,
    marginBottom: 7,
  },
  fieldInput: {
    backgroundColor: colors.black,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 5,
    fontWeight: '600',
  },
  fieldError: {
    color: colors.danger,
    marginVertical: 5,
  },
});
