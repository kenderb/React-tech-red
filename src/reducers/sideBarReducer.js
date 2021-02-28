import { SHOW_SIDE_BAR } from '../actions/constans';

const sideBarReducer = (state = true, action) => {
  switch (action.type) {
    case SHOW_SIDE_BAR:
      return !state;
    default:
      return state;
  }
};

export default sideBarReducer;
