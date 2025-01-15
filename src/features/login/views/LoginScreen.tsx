import { Button, CheckBox, Divider, Icon, Image, Input, Text } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import IconButton from './components/IconButton';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    // Wrap the entire screen with GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <Image
            source={{
              uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%2014.26.22-Ibbt7KJU9rCiCwi4amnjMqO1XkvUmB.png',
            }}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.headerContainer}>
            <Text style={styles.title} h4>
              Let's continue manage your{'\n'}business
            </Text>
            <Text style={styles.subtitle}>Your business is waiting for you</Text>
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="arfi.ganteng@mail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={<Icon type="feather" name="user" size={20} color="#999" />}
            />

            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="••••••"
              leftIcon={<Icon type="feather" name="lock" size={20} color="#999" />}
              rightIcon={
                <Icon
                  type="feather"
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#999"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />

            <View style={styles.rememberContainer}>
              <CheckBox
                title="Remember me"
                checked={rememberMe}
                onPress={() => setRememberMe(!rememberMe)}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.rememberText}
                checkedColor="#4285F4"
              />
              <Button type="clear" titleStyle={styles.forgotText} title="Forgot password?" />
            </View>
          </View>

          <Button
            title="Sign in"
            containerStyle={styles.signInButtonContainer}
            buttonStyle={styles.signInButton}
          />

          <Divider style={styles.divider}>
            <Text style={styles.orText}>or</Text>
          </Divider>

          <View style={styles.socialContainer}>
            <IconButton />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </GestureHandlerRootView> // GestureHandlerRootView wraps the entire screen
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 40,
    marginTop: 40,
  },
  headerContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    gap: 8,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -10,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  rememberText: {
    fontWeight: 'normal',
    color: '#666',
  },
  forgotText: {
    color: '#FF3B30',
    fontSize: 14,
  },
  signInButtonContainer: {
    marginTop: 24,
  },
  signInButton: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    padding: 12,
  },
  divider: {
    marginVertical: 24,
  },
  orText: {
    color: '#666',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
