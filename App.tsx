import Main from '@app/Main';
import store from '@app/stores';
import linking from '@app/utils/linking';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <NavigationContainer linking={linking} onReady={() => BootSplash.hide({ fade: true })}>
            <Main />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
