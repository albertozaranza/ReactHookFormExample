import React, {useRef} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const passwordRef = useRef();

  const {center, inputContainer, button, title} = styles;

  return (
    <SafeAreaView style={center}>
      <Text style={title}>React Hook Form</Text>
      <Text>E-mail:</Text>
      <TextInput
        style={inputContainer}
        keyboardType="email-address"
        onSubmitEditing={() => passwordRef.current.focus()}
        returnKeyType="next"
      />
      <Text>Senha:</Text>
      <TextInput style={inputContainer} secureTextEntry ref={passwordRef} />
      <TouchableOpacity style={button} onPress={() => {}}>
        <Text>Entrar</Text>
      </TouchableOpacity>
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
});

export default App;
