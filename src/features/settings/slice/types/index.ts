interface SettingStateType {
  language: string;
  isDarkMode: boolean;
}

const initialSettingState: SettingStateType = {
  language: 'vi',
  isDarkMode: false,
};

export type { SettingStateType };
export { initialSettingState };
