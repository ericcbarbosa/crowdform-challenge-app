import { useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

import InputEmail from '../../components/form/InputEmail';
import InputPassword from '../../components/form/InputPassword';

export default function LoginScreen({ navigation }) {
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

  const onRegisterPress = () => {
    navigation.navigate('Register');
  };

  const onLoginSubmit = (data) => {
    console.log('data: ', data)
  }

  return (
    <View style={{ padding: 21, backgroundColor: 'white', flex: 1 }}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginBottom: 21 }}>Login</Text>

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

      <View style={styles.signupContainer}>
        <Text style={styles.signup}>
          Don't have an account?{' '}
        </Text>

        <Text style={styles.signupLink} onPress={onRegisterPress}>
          Signup here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldController: {
    marginBottom: 12
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    fontSize: 14,
  },
  signupLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
