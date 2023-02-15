import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";


export default function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={{ padding: 21, backgroundColor: 'white', flex: 1 }}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginBottom: 21 }}>Login!</Text>

      <View style={styles.fieldController}>
        <Text style={styles.fieldLabel}>E-mail</Text>

        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.fieldInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.fieldError}>This field is required.</Text>}
      </View>

      <View style={styles.fieldController}>
        <Text style={styles.fieldLabel}>Password</Text>
        <Controller
          name="password"
          control={control}
          rules={{required: true}}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.fieldInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={styles.fieldError}>This field is required.</Text>}
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
