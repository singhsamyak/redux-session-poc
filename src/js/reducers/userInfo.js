import { LOGIN_SUCCESS } from '../actions/types';

const defaultState = {
  username: '',
  sessionStartTime: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        sessionStartTime: action.loginTime
      };

    default:
      return state;
  };
};
