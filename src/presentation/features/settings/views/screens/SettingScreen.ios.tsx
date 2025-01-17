import useAppNavigation from '@app/navigation/hooks/useAppNavigation';
import { Avatar, Button, Icon, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = () => {
  const { navigation } = useAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Avatar
              size={64}
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Arfi Ganteng</Text>
              <Text style={styles.email}>arfi.ganteng@mail.com</Text>
            </View>
          </View>

          <Button
            title="Pro Member"
            icon={{
              name: 'crown',
              type: 'material-community',
              size: 15,
              color: 'white',
            }}
            iconRight
            buttonStyle={styles.proButton}
            titleStyle={styles.proButtonText}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <ListItem bottomDivider>
            <Icon name="account-cog" type="material-community" />
            <ListItem.Content>
              <ListItem.Title>Profile Settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name="bell-outline" type="material-community" />
            <ListItem.Content>
              <ListItem.Title>Notification Settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name="shield-outline" type="material-community" />
            <ListItem.Content>
              <ListItem.Title>Privacy Settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other</Text>
          <ListItem bottomDivider>
            <Icon name="help-circle-outline" type="material-community" />
            <ListItem.Content>
              <ListItem.Title>Help Center</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name="security" type="material-community" />
            <ListItem.Content>
              <ListItem.Title>Security Settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name="alert-circle-outline" type="material-community" />
            <ListItem.Content>
              <ListItem.Title>Report Problem</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name="headphones" type="material-community" />
            <ListItem.Content>
              <ListItem.Title>Support Request</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <Button
          title="Logout"
          type="outline"
          titleStyle={styles.logoutText}
          containerStyle={styles.logoutButton}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'login' }],
            })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileSection: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    backgroundColor: '#E1E1E1',
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  proButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 36,
  },
  proButtonText: {
    fontSize: 14,
    marginRight: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginLeft: 16,
    marginBottom: 8,
  },
  logoutButton: {
    marginTop: 16,
    marginBottom: 32,
    borderWidth: 0.5,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
  },
});

export default SettingScreen;
