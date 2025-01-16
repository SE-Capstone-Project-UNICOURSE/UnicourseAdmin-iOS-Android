import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../slices';

const reducer = { settings: appReducer.settings };

const rootReducer = combineReducers(reducer);
export default rootReducer;
