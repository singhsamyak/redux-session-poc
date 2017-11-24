import {
  DISMISS_SESSION_WARNING,
  EXPIRE_SESSION,
  LOGIN_SUCCESS,
  WARN_SESSION,
} from '../actions/types';

const defaultState = {
  showSessionWarning: false,
  pageToDisplay: 'login'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case DISMISS_SESSION_WARNING:
      return {
        ...state,
        showSessionWarning: false
      };

    case EXPIRE_SESSION:
      return {
        ...state,
        pageToDisplay: 'session-expired'
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        pageToDisplay: 'account'
      };

    case WARN_SESSION:
      return {
        ...state,
        showSessionWarning: true
      };

    default:
      return state;
  };
};
