import { renderWithProviders } from '@app/shared/utils/test-utils';
import { screen } from '@testing-library/react-native';
import React from 'react';
import InsightScreen from '../presentation/screens/InsightScreen.ios';

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
