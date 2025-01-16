import { useTheme } from '@rneui/themed';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <SafeAreaView>
      <Text style={{ color: theme.theme.colors.black }}>HomeView iOS</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
