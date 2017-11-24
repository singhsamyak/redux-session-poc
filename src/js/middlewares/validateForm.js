import {
  DISABLE_LOGIN,
  ENABLE_LOGIN,
  VALIDATE_FORM
} from '../actions/types';
import { formIsFilled } from '../utilities';

export const validateForm = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case VALIDATE_FORM:
      const username = _username(store.getState());
      const password = _password(store.getState());
      const type = formIsFilled(username)(password) ? ENABLE_LOGIN : DISABLE_LOGIN;

      store.dispatch({ type });
      break;
  };

  return result;
};

// Helper functions to retreive desired state
const _username = state => state.loginForm.username;
const _password = state => state.loginForm.password;
