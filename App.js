import React, {useRef} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('O e-email é inválido')
    .required('O e-mail é necessário'),
  password: Yup.string()
    .min(6, 'A senha é muito curta')
    .required('A senha é necessária'),
});

const App = () => {
  const passwordRef = useRef();

  const {center, inputContainer, button, title, error} = styles;

  return (
    <SafeAreaView style={center}>
      <Text style={title}>React Hook Form</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({email, password}) => alert(`${email} ${password}`)}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <>
            <Text>E-mail:</Text>
            <TextInput
              style={inputContainer}
              keyboardType="email-address"
              onSubmitEditing={() => passwordRef.current.focus()}
              returnKeyType="next"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email && (
              <Text style={error}>{errors.email}</Text>
            )}
            <Text>Senha:</Text>
            <TextInput
              style={inputContainer}
              secureTextEntry
              ref={passwordRef}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text style={error}>{errors.password}</Text>
            )}
            <TouchableOpacity style={button} onPress={handleSubmit}>
              <Text>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginBottom: 48,
    textAlign: 'center',
    fontSize: 32,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  error: {
    color: '#dc3545',
    marginBottom: 8,
  },
});

export default App;
