import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../slices';
const reducer = appReducer;
const rootReducer = combineReducers(reducer);
export default rootReducer;
