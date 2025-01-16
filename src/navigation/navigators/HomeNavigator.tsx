import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import React from 'react';
import useBottomTabRoutes from '../hooks/useBottomRoutes';
import { HomeTabParams } from '../types/HomeTabParams.type';

const Tab = createBottomTabNavigator<HomeTabParams>();

const HomeNavigator = () => {
  const bottomTabRoutes = useBottomTabRoutes();

  return (
    <Tab.Navigator>
      {bottomTabRoutes.map((route) => {
        let routeName;
        switch (route.name) {
          case 'homeTab':
            routeName = 'Home';
            break;
          case 'insightTab':
            routeName = 'Insight';
            break;
          case 'paymentTab':
            routeName = 'Payment';
            break;
          case 'settingTab':
            routeName = 'Setting';
            break;
        }

        return (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              ...route.options,
              title: routeName,
              tabBarIcon: ({ focused, color, size }) => {
                const type = 'ionicon';
                let iconName;
                switch (route.name) {
                  case 'homeTab':
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                  case 'insightTab':
                    iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                    break;
                  case 'paymentTab':
                    iconName = focused ? 'card' : 'card-outline';
                    break;
                  case 'settingTab':
                    iconName = focused ? 'settings' : 'settings-outline';
                    break;
                  default:
                    iconName = 'circle';
                }

                return <Icon name={iconName} type={type} size={size} color={color} />;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
