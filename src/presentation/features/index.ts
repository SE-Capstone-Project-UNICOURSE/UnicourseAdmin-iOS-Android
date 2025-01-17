import HomeScreen from './home/views/screens/HomeScreen.ios';
import InsightScreen from './insight/views/screens/InsightScreen.ios';
import LoginScreen from './login/views/screens/LoginScreen.ios';
import PaymentScreen from './payments/views/screens/PaymentScreen.ios';
import SettingScreen from './settings/views/screens/SettingScreen.ios';

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
