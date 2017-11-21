import { LOGIN_SUCCESS } from '../actions/types';
import { hideShow } from '../utilities';

export const routeUser = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case LOGIN_SUCCESS:
      hideShow('.login')('.account');
      break;
  };

  return result;
};
