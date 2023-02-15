import React from 'react';

import Input from './Input';
import Field from './Field';

const InputEmail = React.forwardRef((props, ref) => {
  const {
    error,
    control,
    onSubmitEditing,
    returnKeyType,
    ...restProps
  } = props;

  const rules = {
    pattern: {
      value: new RegExp('([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])'),
      message: 'E-mail is invalid',
    },
    required: {
      value: true,
      message: 'E-mail is required',
    },
  }

  const renderElement = ({ field: { onChange, onBlur, value } }) => (
    <Input
      ref={ref}
      label="E-mail"
      value={value}
      onBlur={onBlur}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      keyboardType="email-address"
      {...restProps}
    />
  );

  return (
    <Field
      name="email"
      label="E-mail"
      control={control}
      rules={rules}
      error={error}
      render={renderElement}
    />
  )
})

InputEmail.displayName = 'InputEmail'

export default InputEmail;
