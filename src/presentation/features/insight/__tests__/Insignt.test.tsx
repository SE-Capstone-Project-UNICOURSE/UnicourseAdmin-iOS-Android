import { renderWithProviders } from '@app/utils/test-utils';
import { screen } from '@testing-library/react-native';
import React from 'react';
import InsightScreen from '../views/screens/InsightScreen';

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: 'SafeAreaView',
}));

jest.mock('react-native-chart-kit', () => ({
  BarChart: 'SafeAreaView',
}));

describe('InsigntScreen', () => {
  it('renders component correctly', () => {
    renderWithProviders(<InsightScreen />);

    screen.debug();
  });
});
