import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { StatusBar } from 'react-native';
import darkTheme from './shared/utils/theme/darkTheme';
import lightTheme from './shared/utils/theme/lightTheme';
import AppNavigator from './navigation/navigators/AppNavigator';
import AppDialog from './shared/components/AppDialog';
import { useAppSelector } from './store';

const Main = () => {
  const { isDarkMode } = useAppSelector((state) => state.settings);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
      <StatusBar />
      <AppDialog />
    </ThemeProvider>
  );
};

export default Main;
