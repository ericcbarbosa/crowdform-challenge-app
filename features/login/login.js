import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { login, selectUsers } from '../../store/user/user';
import InputEmail from '../../components/form/InputEmail';
import InputPassword from '../../components/form/InputPassword';
import Alert from '../../components/Alert';
import Button from "../../components/Button";
import colors from "../../theme/colors";

export default function LoginScreen({ navigation }) {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

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
    const user = users.find(({ email }) => data?.email === email)

    if (user) {
      dispatch(login())
      return dispatch(login(user));
    }

    setShowErrorModal(true);
  }

  return (
    <View style={styles.container}>
      <Alert visible={showErrorModal} onClose={onRegisterPress}>
        <Text>We couldn't find your account. Please, create an account.</Text>
      </Alert>

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

      <Button
        title="Login"
        onPress={handleSubmit(onLoginSubmit)}
      />

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
  container: {
    flex: 1,
    padding: 21,
    backgroundColor: 'white',
  },
  fieldController: {
    marginBottom: 12
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    fontSize: 14,
    color: colors.darkerMuted,
  },
  signupLink: {
    color: colors.darkerMuted,
    textDecorationLine: 'underline',
  },
});
