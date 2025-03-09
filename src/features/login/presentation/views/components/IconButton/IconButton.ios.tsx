import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type IconButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  action?: () => void;
};

const IconButton = ({ icon, action }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={action} style={style.buttonContainer}>
      <Image style={style.icon} source={icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonContainer: { borderRadius: 50, padding: 15, borderColor: 'gray', borderWidth: 0.2 },
  icon: { width: 25, height: 25, resizeMode: 'contain' },
});

export default IconButton;
