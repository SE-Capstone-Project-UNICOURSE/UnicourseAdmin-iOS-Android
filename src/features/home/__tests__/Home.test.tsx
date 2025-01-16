import { renderWithProviders } from '@app/utils/test-utils';
import { screen } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../views/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders Android-specific component correctly', () => {
    jest.mock('react-native', () => {
      const original = jest.requireActual('react-native');
      return {
        ...original,
        Platform: { ...original.Platform, OS: 'android' },
      };
    });

    renderWithProviders(<HomeScreen />);

    screen.debug();
  });

  it('renders iOS-specific component correctly', () => {
    jest.mock('react-native', () => {
      const original = jest.requireActual('react-native');
      return {
        ...original,
        Platform: { ...original.Platform, OS: 'ios' },
      };
    });

    renderWithProviders(<HomeScreen />);

    screen.debug();
    expect(screen.getByText('HomeView iOS')).toBeTruthy();
  });
});
