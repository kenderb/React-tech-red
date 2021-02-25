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
      localStorage.setItem('authUser', JSON.stringify({ name: action.payload.data.type, jwttoken: action.payload.data.token }));
      console.log('Action: ', action);
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
