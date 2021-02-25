import {
  AUTH_SUCESS, AUTH_ERROR,
  DATA_LOADING,
} from './constans';

export const authSuccess = data => ({
  type: AUTH_SUCESS,
  payload: data,
});

export const authError = () => ({
  type: AUTH_ERROR,
});

export const dataLoading = () => ({
  type: DATA_LOADING,
});
