import wonapp from '../api/wonapp';

import {
  authSuccess, authError,
  dataLoading,
} from './actionTypes';

export const authUser = authentication => async dispatch => {
  try {
    dispatch(dataLoading());
    const response = await wonapp.post('/login', authentication);
    console.log(response);
    console.log(authSuccess);
    console.log(authError);
    // dispatch(authSuccess(response));
    return true;
  } catch (error) {
    console.log(error.messages);
    // dispatch(authError());
    return false;
  }
};

export const getCatalog = () => async dispatch => {
  console.log(dispatch);
  return true;
};
