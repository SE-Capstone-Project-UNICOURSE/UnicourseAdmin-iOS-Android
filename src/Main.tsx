import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { StatusBar } from 'react-native';
import { useAppSelector } from './store';
import darkTheme from './presentation/utils/theme/darkTheme';
import lightTheme from './presentation/utils/theme/lightTheme';
import AppNavigator from './presentation/navigation/navigators/AppNavigator';
import AppDialog from './presentation/components/AppDialog';

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
