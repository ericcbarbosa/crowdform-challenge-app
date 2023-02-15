import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = React.forwardRef((props, ref) => {
  const {
    value,
    onChange,
    onBlur,
    onSubmitEditing,
    returnKeyType,
    keyboardType,
    ...restProps
  } = props;

  return (
    <TextInput
      ref={ref}
      style={styles.input}
      value={value}
      onBlur={onBlur}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      {...restProps}
    />
  )
});

Input.displayName = 'Input';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 5,
    fontWeight: '600',
  },
});

export default Input;
