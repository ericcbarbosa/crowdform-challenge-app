import React, { useRef } from 'react';
import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

import InputEmail from '../../components/form/InputEmail';
import InputPassword from '../../components/form/InputPassword';
import Field from '../../components/form/Field';
import Input from '../../components/form/Input';
import CheckBox from '../../components/form/CheckBox';
import TermsLabel from './components/TermsLabel';

export default function RegisterScreen({ navigation }) {
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: false,
    }
  });

  const rules = {
    firstName: {
      required: {
        value: true,
        message: 'First name is required',
      },
      minLength: {
        value: 3,
        message: 'First name should have at least 3 characters',
      },
    },
    lastName: {
      required: {
        value: true,
        message: 'Last name is required',
      },
      minLength: {
        value: 3,
        message: 'Last name should have at least 3 characters',
      },
    },
    terms: {
      required: {
        value: true,
        message: 'Agree to the Terms of Service and Privacy policy to proceed',
      },
    },
  }

  const focusNextField = (field) => {
    if (field.current) {
      field.current.focus();
    }
  };

  const onRegisterSubmit = (data) => {
    console.log('data: ', data)
  }

  const onLoginPress = () => {
    navigation.navigate('Login')
  }

  const onTermsPress = () => {
    navigation.navigate('Login')
  }

  const onPolicyPress = () => {
    navigation.navigate('Login')
  }

  return (
    <KeyboardAvoidingView style={styles.avoidingView} behavior="height" keyboardVerticalOffset={150}>
      <ScrollView keyboardShouldPersistTaps="handled" height="100%">
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginBottom: 21 }}>Create your account</Text>

        <View style={styles.fieldController}>
          <Field
            name="firstName"
            label="First name"
            control={control}
            rules={rules.firstName}
            error={errors?.firstName?.message}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                onSubmitEditing={() => focusNextField(lastNameRef)}
                returnKeyType="next"
              />
            )}
          />
        </View>

        <View style={styles.fieldController}>
          <Field
            name="lastName"
            label="Last name"
            control={control}
            rules={rules.lastName}
            error={errors?.lastName?.message}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                ref={lastNameRef}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                onSubmitEditing={() => focusNextField(emailRef)}
                returnKeyType="next"
              />
            )}
          />
        </View>

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
            onSubmitEditing={() => focusNextField(termsRef)}
            returnKeyType="next"
          />
        </View>

        <View style={styles.fieldController}>
          <CheckBox
            name="terms"
            control={control}
            rules={rules.terms}
            error={errors?.terms?.message}
            Label={({styles}) => (
              <TermsLabel
                labelStyle={styles}
                onTermsPress={onTermsPress}
                onPolicyPress={onPolicyPress}
              />
            )}
          />
        </View>

        <Button title="Login" onPress={handleSubmit(onRegisterSubmit)} />

        <View style={styles.signupContainer}>
          <Text style={styles.signup}>
            Already have an account?{' '}
          </Text>

          <Text style={styles.signupLink} onPress={onLoginPress}>
            Log in here
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  avoidingView: {
    display: 'flex',
    padding: 21,
    backgroundColor: 'white',
    flex: 1,
  },
});
