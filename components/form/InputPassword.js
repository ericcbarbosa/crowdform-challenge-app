import React from 'react';

import Input from './Input';
import Field from './Field';

const InputPassword = React.forwardRef(({
 error,
 control,
 onChange,
 onBlur,
 ...restProps
}, ref) => {
  const rules = {
    required: {
      value: true,
      message: 'Password is required',
    },
  }

  const renderElement = ({ field: { onChange, onBlur, value } }) => (
    <Input
      ref={ref}
      label="Password"
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
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
