import {Middleware, isRejectedWithValue} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const apiMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errorMessage =
      (action.payload as {message?: string})?.message || 'Something went wrong';
    Alert.alert('Error', errorMessage);
  }
  return next(action);
};

export default apiMiddleware;
