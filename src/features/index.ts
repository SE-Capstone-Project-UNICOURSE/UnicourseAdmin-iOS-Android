import HomeScreen from './home/views/screens/HomeScreen';
import InsightView from './insight/views/screens/InsightScreen.ios';
import LoginScreen from './login/views/screens/LoginScreen';
import PaymentView from './payments/views/screens/PaymentScreen';
import SettingView from './settings/views/screens/SettingScreen.ios';

const MainScreens = {
  LoginScreen,
};

const BottomScreen = {
  HomeScreen,
  PaymentView,
  InsightView,
  SettingView,
};

export { BottomScreen };

export default MainScreens;
