import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import InputField from './input-field';

const Login = ({
  isLoginDisabled,
  handleLogin,
  handlePasswordChange,
  handleUsernameChange
}) => (
  <section className='login'>
    <h1>Sign In</h1>
    <form onSubmit={handleLogin}>
      <InputField
        name='username'
        onChange={handleUsernameChange}
        placeholder='Email Address'
        type='text'/>
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
  </section>
);

Login.propTypes = {
  handleLogin: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleUsernameChange: PropTypes.func
}

export default Login;
