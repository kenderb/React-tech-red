import { combineReducers } from 'redux';
import userReducer from './userReducer';
import catalogReducer from './catalogReducer';
import sideBarReducer from './sideBarReducer';

export default combineReducers({
  user: userReducer,
  catalog: catalogReducer,
  sideBar: sideBarReducer,
});
