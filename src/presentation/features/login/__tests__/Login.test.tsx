import { renderWithProviders } from '@app/utils/test-utils';
import React from 'react';
import LoginScreen from '../views/screens/LoginScreen';

jest.mock('react-native-gesture-handler', () => ({
  ScrollView: 'ScrollView',
  TouchableOpacity: 'TouchableOpacity',
}));

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: 'SafeAreaView',
}));

describe('LoginScreen', () => {
  it('renders correctly', () => {
    renderWithProviders(<LoginScreen />);
  });
});
