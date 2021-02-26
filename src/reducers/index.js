import { combineReducers } from 'redux';
import userReducer from './userReducer';
import catalogReducer from './catalogReducer';

export default combineReducers({
  user: userReducer,
  catalog: catalogReducer,
});
