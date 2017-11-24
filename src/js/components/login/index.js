import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../login-form';

const Login = ({
  isLoginDisabled,
  handleLogin,
  handlePasswordChange,
  handleUsernameChange
}) => {

  return (
    <section className='login'>
      <h1>Sign In</h1>
      <LoginForm
        isLoginDisabled={isLoginDisabled}
        handleLogin={handleLogin}
        handlePasswordChange={handlePasswordChange}
        handleUsernameChange={handleUsernameChange}/>
    </section>
  );
};

Login.propTypes = {
  isLoginDisabled: PropTypes.bool,
  handleLogin: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleUsernameChange: PropTypes.func
}

export default Login;
