import { useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

import InputEmail from '../../components/form/InputEmail';
import InputPassword from '../../components/form/InputPassword';


export default function LoginScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const focusNextField = (field) => {
    if (field.current) {
      field.current.focus();
    }
  };

  const onLoginSubmit = (data) => {
    console.log('data: ', data)
  }

  const onSubmit = data => console.log(data);

  return (
    <View style={{ padding: 21, backgroundColor: 'white', flex: 1 }}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginBottom: 21 }}>Login!</Text>

      <View style={styles.fieldController}>
        <InputEmail
          ref={emailRef}
          control={control}
          error={errors?.email?.message}
          onSubmitEditing={() => focusNextField(passwordRef)}
          returnKeyType="next"
        />
      </View>

      <View style={styles.fieldController}>
        <InputPassword
          ref={passwordRef}
          control={control}
          error={errors?.password?.message}
        />
      </View>

      <Button title="Login" onPress={handleSubmit(onLoginSubmit)} />
    </View>
  );
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
