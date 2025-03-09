import HomeScreen from './home/presentation/views/screens/HomeScreen';
import InsightScreen from './insight/presentation/screens/InsightScreen';
import LoginScreen from './login/presentation/views/screens/LoginScreen';
import PaymentScreen from './payments/presentation/views/screens/PaymentScreen';
import SettingScreen from './settings/presentation/views/screens/SettingScreen';

const MainScreens = { LoginScreen };

const BottomScreen = { HomeScreen, PaymentScreen, InsightScreen, SettingScreen };

export { BottomScreen };

export default MainScreens;
