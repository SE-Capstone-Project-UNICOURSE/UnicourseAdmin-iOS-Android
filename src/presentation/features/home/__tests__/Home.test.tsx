import { screen } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../views/screens/HomeScreen';
import { renderWithProviders } from '@app/core/utils/test-utils';

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
