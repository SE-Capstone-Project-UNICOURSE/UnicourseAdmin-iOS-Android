import MainScreens from '@app/features';
import {Route} from '../types/Route.type';

const useRoutes = (): Route[] => {
  const routes: Route[] = [
    {
      name: 'login',
      component: MainScreens.LoginScreen,
      options: {
        headerShown: false,
      },
    },
  ];

  return routes;
};

export default useRoutes;
