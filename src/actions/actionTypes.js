import {
  AUTH_SUCCESS, TOP_10_SUCCESS,
  LOGOUT_USER, FILTER_SUCCESS,
  SHOW_SIDE_BAR,
} from './constans';

export const authSuccess = data => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const top10Succes = catalogList => ({
  type: TOP_10_SUCCESS,
  payload: catalogList,
});

export const filterSuccess = catalogList => ({
  type: FILTER_SUCCESS,
  payload: catalogList,
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});

export const showSideBar = () => ({
  type: SHOW_SIDE_BAR,
});
