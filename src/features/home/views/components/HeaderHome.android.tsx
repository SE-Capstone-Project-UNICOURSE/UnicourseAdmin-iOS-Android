import { Avatar, Icon } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderHome = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Avatar
          size={40}
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          containerStyle={styles.avatar}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Arfi Ganteng</Text>
        </View>
      </View>
      <Icon name="bell-outline" type="material-community" size={24} color={theme.colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#E1E1E1',
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HeaderHome;
