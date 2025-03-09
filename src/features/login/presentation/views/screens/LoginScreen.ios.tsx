import useAppNavigation from '@app/navigation/hooks/useAppNavigation';
import { Button, CheckBox, Divider, Icon, Image, Input, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton from '../components/IconButton/IconButton.ios';
import NativeLocalStorage from '@app/specs/NativeLocalStorage';
import icons from '@app/shared/assets/icons';

const EMPTY = '<empty>';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { navigation } = useAppNavigation();

  const [value, setValue] = React.useState<string | null>(null);

  const [editingValue, setEditingValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedValue = NativeLocalStorage?.getItem('myKey');
    setValue(storedValue ?? '');
  }, []);

  function saveValue() {
    NativeLocalStorage?.setItem(editingValue ?? EMPTY, 'myKey');
    setValue(editingValue);
  }

  function clearAll() {
    NativeLocalStorage?.clear();
    setValue('');
  }

  function deleteValue() {
    NativeLocalStorage?.removeItem('myKey');
    setValue('');
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={icons.logoIcon} style={styles.logo} resizeMode="contain" />
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.title} h3>
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
          onPress={() => navigation.navigate('home')}
        />

        <View style={styles.diviverContainer}>
          <Divider width={1} style={styles.divider} />
          <Text style={styles.orText}>Or</Text>
          <Divider width={1} style={styles.divider} />
        </View>

        <View style={styles.socialContainer}>
          <IconButton icon={icons.appleIcon} />
          <IconButton icon={icons.googleIcon} />
        </View>

        <Text style={styles.text}>Current stored value is: {value ?? 'No Value'}</Text>
        <TextInput
          placeholder="Enter the text you want to store"
          style={styles.textInput}
          onChangeText={setEditingValue}
        />
        <Button title="Save" onPress={saveValue} />
        <Button title="Delete" onPress={deleteValue} />
        <Button title="Clear" onPress={clearAll} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
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
    fontSize: 15,
  },
  forgotText: {
    color: '#FF3B30',
    fontSize: 15,
  },
  signInButtonContainer: {
    marginTop: 24,
  },
  signInButton: {
    backgroundColor: '#4285F4',
    borderRadius: 25,
    padding: 12,
  },
  diviverContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  divider: { width: '42%' },
  orText: {
    color: '#666',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

export default LoginScreen;
