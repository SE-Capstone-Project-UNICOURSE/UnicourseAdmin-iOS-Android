import { BottomScreen } from '@app/features';
import { HomeTabParams } from '../types/HomeTabParams.type';
import { BottomTabRoute } from '../types/Route.type';

const useBottomTabRoutes = (): BottomTabRoute<HomeTabParams>[] => {
  const routes: BottomTabRoute<HomeTabParams>[] = [
    {
      name: 'homeTab',
      component: BottomScreen.HomeScreen,
      options: { headerShown: false },
    },
    {
      name: 'insightTab',
      component: BottomScreen.InsightScreen,
      options: { headerShown: false },
    },
    {
      name: 'paymentTab',
      component: BottomScreen.PaymentScreen,
      options: { headerShown: false },
    },
    {
      name: 'settingTab',
      component: BottomScreen.SettingScreen,
    },
  ];

  return routes;
};

export default useBottomTabRoutes;
