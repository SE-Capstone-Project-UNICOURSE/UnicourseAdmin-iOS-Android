import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeTabParams } from '../types/HomeTabParams.type';
import { RootStackParams } from '../types/RootStackParams.type';

const useAppNavigation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const bottomTabBar = useNavigation<BottomTabNavigationProp<HomeTabParams>>();
  return { navigation, bottomTabBar };
};

export default useAppNavigation;
