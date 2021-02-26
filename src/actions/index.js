import wonapp from '../api/wonapp';

import {
  authSuccess, authError,
  dataLoading,
} from './actionTypes';

export const authUser = authentication => async dispatch => {
  try {
    dispatch(dataLoading());
    const response = await wonapp.post('/login', authentication);
    dispatch(authSuccess(response.data));
    return true;
  } catch (error) {
    console.log(error.messages);
    console.log(authError);
    // dispatch(authError());
    return false;
  }
};

export const getCatalog = () => async dispatch => {
  console.log(dispatch);
};
