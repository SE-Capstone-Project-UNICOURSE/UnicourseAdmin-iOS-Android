import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import useRoutes from '../hooks/useRoutes';
import {RootStackParams} from '../types/RootStackParams.type';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  const route = useRoutes();

  return (
    <Stack.Navigator>
      {route.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          options={route.options}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
