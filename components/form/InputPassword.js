import React from 'react';

import Input from './Input';
import Field from './Field';

const InputPassword = React.forwardRef((props, ref) => {
  const {
    error,
    control,
    onSubmitEditing,
    returnKeyType,
    ...restProps
  } = props;

  const rules = {
    required: {
      value: true,
      message: 'Password is required',
    },
    minLength: {
      value: 8,
      message: 'Password should have at least 8 characters',
    },
  }

  const renderElement = ({ field: { onChange, onBlur, value } }) => (
    <Input
      ref={ref}
      label="Password"
      type="password"
      value={value}
      onBlur={onBlur}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      {...restProps}
    />
  )

  return (
    <Field
      name="password"
      label="Password"
      control={control}
      rules={rules}
      error={error}
      render={renderElement}
    />
  )
})

InputPassword.displayName = 'InputPassword'

export default InputPassword;
