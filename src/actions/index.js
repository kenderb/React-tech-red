import wonapp from '../api/wonapp';

import {
  authSuccess, top10Succes,
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

export const getCatalog = jwttoken => async dispatch => {
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
