import { screen } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../presentation/views/screens/HomeScreen.ios';
import { renderWithProviders } from '@app/shared/utils/test-utils';

describe('HomeScreen', () => {
  it('renders component correctly', () => {
    renderWithProviders(<HomeScreen />);

    screen.debug();
    // Test if main UI elements are rendered
    expect(screen.getByText('My Business')).toBeTruthy();
    expect(screen.getByText('Analytics')).toBeTruthy();
    expect(screen.getByText('Orders')).toBeTruthy();
  });
});
