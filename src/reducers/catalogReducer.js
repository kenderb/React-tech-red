import { TOP_10_SUCCESS, FILTER_SUCCESS } from '../actions/constans';

const catalogReducer = (state = { }, action) => {
  switch (action.type) {
    case TOP_10_SUCCESS:
      return action.payload;
    case FILTER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default catalogReducer;
