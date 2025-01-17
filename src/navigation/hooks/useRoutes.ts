import MainScreens from '@app/presentation/features';
import HomeNavigator from '../navigators/HomeNavigator';
import { Route } from '../types/Route.type';

const useRoutes = (): Route[] => {
  const routes: Route[] = [
    {
      name: 'login',
      component: MainScreens.LoginScreen,
      options: {
        headerShown: false,
        presentation: 'fullScreenModal',
      },
    },
    {
      name: 'home',
      component: HomeNavigator,
      options: {
        headerShown: false,
      },
    },
  ];

  return routes;
};

export default useRoutes;
