import { combineReducers } from 'redux';
import loginForm from './loginForm';
import userInfo from './userInfo';

export default combineReducers({
  loginForm,
  userInfo
});
