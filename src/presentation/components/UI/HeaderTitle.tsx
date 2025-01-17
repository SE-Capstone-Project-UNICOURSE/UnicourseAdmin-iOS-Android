import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderTitleProps {
  title: string;
  optionAction?: ReactNode;
}

const HeaderTitle = ({ title, optionAction }: HeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {optionAction}
      </View>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: 'blue',
    fontWeight: 'bold',
  },
  underline: {
    width: '16%',
    height: 2,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 5,
  },
});

export default HeaderTitle;
