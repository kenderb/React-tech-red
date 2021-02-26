import { AUTH_SUCCESS } from '../actions/constans';

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

    default:
      return state;
  }
};

export default userReducer;
