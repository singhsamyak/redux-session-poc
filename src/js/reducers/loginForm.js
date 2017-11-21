import {
  DISABLE_LOGIN,
  ENABLE_LOGIN,
  FILL_PASSWORD,
  FILL_USERNAME
} from '../actions/types';

const defaultState = {
  username: '',
  password: '',
  loginDisabled: true
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case FILL_USERNAME:
      return {
        ...state,
        username: action.username
      };

    case FILL_PASSWORD:
      return {
        ...state,
        password: action.password
      };

    case ENABLE_LOGIN:
      return {
        ...state,
        loginDisabled: false
      };

    case DISABLE_LOGIN:
      return {
        ...state,
        loginDisabled: true
      };

    default:
      return state;
  };
};
