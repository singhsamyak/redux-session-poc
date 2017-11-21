import {
  AUTHENTICATE_USER,
  LOGIN_SUCCESS
} from '../actions/types';

export const authenticateUser = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case AUTHENTICATE_USER:

      // Mocking authentication...
      setTimeout(() => {
        // When authentication successful...
        store.dispatch({
          type: LOGIN_SUCCESS,
          username: action.username,
          loginTime: new Date().getTime()
        });
      }, 2000);

      break;
  };

  return result;
};
