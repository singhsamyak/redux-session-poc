import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../input-field';
import Button from '../button';

const LoginForm = ({
  isLoginDisabled,
  handleLogin,
  handlePasswordChange,
  handleUsernameChange
}) => {
  return (
    <form onSubmit={handleLogin}>
      <InputField
        name='username'
        onChange={handleUsernameChange}
        placeholder='Email Address'
        type='email'/>
      <InputField
        name='password'
        onChange={handlePasswordChange}
        placeholder='Password'
        type='password'/>
      <Button
        isDisabled={isLoginDisabled}
        name='login'
        isPrimary={true}
        value='Login'/>
    </form>
  );
};

LoginForm.propTypes = {
  Button: PropTypes.func,
  isLoginDisabled: PropTypes.bool,
  handleLogin: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleUsernameChange: PropTypes.func
}

export default LoginForm;
