import HomeScreen from './home/presentation/views/screens/HomeScreen.ios';
import InsightScreen from './insight/presentation/screens/InsightScreen.ios';
import LoginScreen from './login/presentation/views/screens/LoginScreen.ios';
import PaymentScreen from './payments/presentation/views/screens/PaymentScreen.ios';
import SettingScreen from './settings/presentation/views/screens/SettingScreen.ios';

const MainScreens = { LoginScreen };

const BottomScreen = { HomeScreen, PaymentScreen, InsightScreen, SettingScreen };

export { BottomScreen };

export default MainScreens;
