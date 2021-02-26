import {
  AUTH_SUCCESS, TOP_10_SUCCESS,
  LOGOUT_USER,
} from './constans';

export const authSuccess = data => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const top10Succes = catalogList => ({
  type: TOP_10_SUCCESS,
  payload: catalogList,
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});
