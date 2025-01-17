import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingView = () => {
  const styles = getStyles('black', 0.5);
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const getStyles = (backgroundColor: string, opacity: number) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor,
      opacity,
      zIndex: 1000,
    },
  });
export default LoadingView;
