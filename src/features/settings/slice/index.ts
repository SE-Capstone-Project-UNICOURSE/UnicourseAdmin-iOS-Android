import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialSettingState } from './types';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialSettingState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme, setIsDarkMode, changeLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
