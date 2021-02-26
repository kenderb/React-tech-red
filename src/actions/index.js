import wonapp from '../api/wonapp';

import {
  authSuccess, top10Succes,
  logOutUser, filterSuccess,
} from './actionTypes';

export const authUser = authentication => async dispatch => {
  try {
    const response = await wonapp.post('/login', authentication);
    dispatch(authSuccess(response.data));
    return true;
  } catch (error) {
    return error.messages;
  }
};

export const getTop10Catalog = jwttoken => async dispatch => {
  try {
    const response = await wonapp.get('/products/top', {
      headers: {
        Authorization: `Bearer ${jwttoken}`,
      },
    });
    dispatch(top10Succes(response.data));

    return true;
  } catch (error) {
    return error.messages;
  }
};

export const filterCatalog = (jwttoken, category) => async dispatch => {
  try {
    const response = await wonapp.get(`/products/search?page=${1}&per_page=${5}&category=${category}`,
      {
        headers: {
          Authorization: `Bearer ${jwttoken}`,
        },
      });
    console.log(response);
    dispatch(filterSuccess(response.data));

    return true;
  } catch (error) {
    return error.messages;
  }
};

export const logOutSucces = () => (logOutUser());
