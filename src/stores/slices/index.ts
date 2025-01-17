import settingSlices from '@app/presentation/features/settings/slice';
import dialogSlices from './dialog.slice';

const appReducer = {
  settings: settingSlices,
  dialog: dialogSlices,
};

export default appReducer;
