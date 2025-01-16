import { AppStore, RootState, setupStore } from '@app/stores';
import type { RenderOptions } from '@testing-library/react-native';
import { render } from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@rneui/themed';

// Create a mock theme for testing
const mockTheme = createTheme({
  lightColors: {
    black: '#000',
  },
  darkColors: {
    black: '#fff',
  },
  mode: 'light',
});

// Extend render options to include Redux store and initial state
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
