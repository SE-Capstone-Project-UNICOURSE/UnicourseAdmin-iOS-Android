import { RootStackParams } from '@app/navigation/types/RootStackParams.type';
import { LinkingOptions } from '@react-navigation/native';

const linking: LinkingOptions<RootStackParams> = {
  prefixes: ['unicourseadmin://app'],
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
