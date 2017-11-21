import {
  AUTHENTICATE_USER,
  FILL_PASSWORD,
  FILL_USERNAME,
  VALIDATE_FORM
} from '../actions/types';
import { connect } from 'react-redux';
import Login from '../components/login';

const mapStateToProps = (state) => {
  console.log('STATE', state); // for debug only
  return {
    isLoginDisabled: state.loginForm.loginDisabled
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (event) => {
      event.preventDefault();
      dispatch({
        type: AUTHENTICATE_USER,
        username: event.target[0].value,
        password: event.target[1].value
      });
    },

    handleUsernameChange: (event) => {
      event.preventDefault();
      const username = event.target.value;
      dispatch({ type: FILL_USERNAME, username });
      dispatch({ type: VALIDATE_FORM });
    },

    handlePasswordChange: (event) => {
      event.preventDefault();
      const password = event.target.value;
      dispatch({ type: FILL_PASSWORD, password });
      dispatch({ type: VALIDATE_FORM });
    }
  }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
