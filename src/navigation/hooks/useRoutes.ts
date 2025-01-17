import MainScreens from '@app/presentation/features';
import { Route } from '../types/Route.type';
import HomeNavigator from '../navigators/HomeNavigator';

const useRoutes = (): Route[] => {
  const routes: Route[] = [
    {
      name: 'login',
      component: MainScreens.LoginScreen,
      options: {
        headerShown: false,
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
