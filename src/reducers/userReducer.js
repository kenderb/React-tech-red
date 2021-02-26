import { AUTH_SUCCESS, LOGOUT_USER } from '../actions/constans';

const localToken = JSON.parse(window.localStorage.getItem('authUser'));
const authState = {
  isLoggedIn: !!localToken,
  user: {
    name: '',
    jwttoken: '',
  },
};

const userReducer = (state = authState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      localStorage.setItem('authUser', JSON.stringify({ jwttoken: action.payload.data.token }));
      return {
        ...state,
        isLoggedIn: true,
        user: {
          name: action.payload.data.type,
          jwttoken: action.payload.data.token,
        },
      };
    case LOGOUT_USER:
      localStorage.removeItem('authUser');
      return {
        ...state,
        isLoggedIn: false,
        user: {
          name: '',
          jwttoken: '',
        },
      };
    default:
      return state;
  }
};

export default userReducer;
