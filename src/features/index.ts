import HomeScreen from './home/views/screens/HomeScreen';
import InsightScreen from './insight/views/screens/InsightScreen';
import LoginScreen from './login/views/screens/LoginScreen';
import PaymentScreen from './payments/views/screens/PaymentScreen';
import SettingScreen from './settings/views/screens/SettingScreen';

const MainScreens = {
  LoginScreen,
};

const BottomScreen = {
  HomeScreen,
  PaymentScreen,
  InsightScreen,
  SettingScreen,
};

export { BottomScreen };

export default MainScreens;
