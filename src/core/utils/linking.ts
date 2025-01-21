import { RootStackParams } from '@app/presentation/navigation/types/RootStackParams.type';
import { LinkingOptions } from '@react-navigation/native';

const linking: LinkingOptions<RootStackParams> = {
  prefixes: ['unicourseadmin://app', 'https://app.unicourseadmin.com'],
  config: {
    screens: {
      home: {
        path: 'home',
      },
      login: {
        path: 'login',
      },
    },
  },
};

export default linking;
