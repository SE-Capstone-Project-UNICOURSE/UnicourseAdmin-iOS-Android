import { renderWithProviders } from '@app/utils/test-utils';
import { screen } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../views/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders Android-specific component correctly', () => {
    renderWithProviders(<HomeScreen />);

    screen.debug();
  });

  it('renders iOS-specific component correctly', () => {
    renderWithProviders(<HomeScreen />);

    screen.debug();
  });
});
