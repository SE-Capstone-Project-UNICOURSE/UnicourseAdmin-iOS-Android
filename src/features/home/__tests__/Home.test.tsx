import { render, screen } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../views/screens/HomeScreen'; // Ensure this file uses Platform.select correctly

describe('HomeScreen', () => {
  jest.mock('react-native', () => {
    const original = jest.requireActual('react-native');
    return {
      ...original,
      Platform: { ...original.Platform, OS: 'android' },
    };
  });

  it('renders Android-specific component correctly', () => {
    render(<HomeScreen />);
    screen.debug();
  });

  it('renders iOS-specific component correctly', () => {
    render(<HomeScreen />);
    screen.debug();
    expect(screen.getByText('HomeView iOS')).toBeTruthy();
  });
});
