import { render } from '@testing-library/react-native';
import React from 'react';
import LoginScreen from '../views/screens/LoginScreen';

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: 'View',
    TouchableWithoutFeedback: 'TouchableWithoutFeedback',
    TouchableOpacity: 'TouchableOpacity',
  };
});

describe('LoginScreen', () => {
  it('renders correctly', () => {
    render(<LoginScreen />);
    // // Assertions for text elements
    // expect(screen.getByText('Welcome Back')).toBeTruthy(); // Check for title
    // expect(screen.getByText('Sign up')).toBeTruthy(); // Check link text

    // // Assertions for input placeholders
    // expect(screen.getByPlaceholderText('Email')).toBeTruthy(); // Email input
    // expect(screen.getByPlaceholderText('Password')).toBeTruthy(); // Password input

    // // Assertion for button
    // expect(screen.getByText('Login')).toBeTruthy(); // Login button
  });
});
