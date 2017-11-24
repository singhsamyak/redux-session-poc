import { combineReducers } from 'redux';
import loginForm from './loginForm';
import page from './page';
import userInfo from './userInfo';

export default combineReducers({
  loginForm,
  page,
  userInfo
});
