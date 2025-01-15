import HomeView from './home/views/HomeView';
import InsightView from './insight/views/InsightView';
import LoginScreen from './login/views/LoginScreen';
import PaymentView from './payments/views/PaymentView';
import SettingView from './settings/views/SettingView';

const MainScreens = {
  LoginScreen,
};

const BottomScreen = {
  HomeView,
  PaymentView,
  InsightView,
  SettingView,
};

export { BottomScreen };

export default MainScreens;
