import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './navigation/navigators/AppNavigator';
import { useAppSelector } from './stores';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';

const Main = () => {
  const { isDarkMode } = useAppSelector((state) => state.settings);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
      <StatusBar />
    </ThemeProvider>
  );
};

export default Main;
