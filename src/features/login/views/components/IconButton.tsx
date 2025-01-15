import icons from '@app/assets/icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

const IconButton = () => {
  return (
    <View style={style.buttonContainer}>
      <FastImage
        style={style.icon}
        source={icons.appleIcon}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default IconButton;
