import icons from '@app/assets/icons';
import { Button, Input, Text } from '@rneui/base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import useLoginViewModel from '../viewmodels/useLoginViewModel';

const LoginScreen = () => {
  const googleIcon = icons.googleIcon;
  useLoginViewModel();

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Welcome Back
      </Text>

      <Input
        placeholder="Email"
        leftIcon={{ type: 'material', name: 'email', color: '#aaa' }}
        inputStyle={styles.inputText}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'material', name: 'lock', color: '#aaa' }}
        secureTextEntry
        inputStyle={styles.inputText}
        containerStyle={styles.inputContainer}
      />

      <Button title="Login" buttonStyle={styles.button} containerStyle={styles.buttonContainer} />
      <Text style={styles.footerText}>
        Don't have an account? <Text style={styles.link}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputText: {
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  footerText: {
    marginTop: 20,
    color: '#666',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
