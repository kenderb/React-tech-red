import { AUTH_SUCESS } from '../actions/constans';

const authState = {
  isLoggedIn: false,
  user: {
    name: '',
    jwttoken: '',
  },
};

const userReducer = (state = authState, action) => {
  switch (action.type) {
    case AUTH_SUCESS:
      localStorage.setItem('auth', JSON.stringify(state));
      return {
        ...state,
        isLoggedIn: true,
        user: {
          name: action.payload.name,
          jwttoken: action.payload.token,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
