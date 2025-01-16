/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from './RootStackParams.type';

type Route = {
  name: keyof RootStackParams;
  component: React.ComponentType<{}>;
  options?: NativeStackNavigationOptions;
};
type BottomTabRoute<ParamList> = {
  name: keyof ParamList;
  component: React.ComponentType<any>;
  options?: BottomTabNavigationOptions;
};

// type DrawerRoute<ParamList> = {
//   name: keyof ParamList;
//   component: React.ComponentType<any>;
//   options?: DrawerNavigationOptions;
// };

export type { BottomTabRoute, Route };
