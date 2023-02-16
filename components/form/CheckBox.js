import React from 'react';
import ExpoCheckbox from 'expo-checkbox';
import { StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';

export default function CheckBox(props) {
  const {
    name,
    control,
    rules,
    Label,
    error,
  } = props;

  const renderElement = ({ field: { onChange, value } }) => (
    <ExpoCheckbox
      value={value}
      onValueChange={onChange}
      style={styles.checkbox}
    />
  )

  return (
    <View>
      <View style={styles.container}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={renderElement}
        />

        <Label styles={styles.label} />
      </View>

      {!!error && (
        <Text style={styles.fieldError}>{error}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    paddingHorizontal: 0,
    marginBottom: 7,
  },
  checkbox: {
    marginRight: 7,
  },
  label: {
    fontSize: 13,
    color: '#666',
  },
  fieldError: {
    color: '#f00',
    marginVertical: 5,
  },
});


