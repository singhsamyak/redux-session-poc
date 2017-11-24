import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ isDisabled, isPrimary, onClick, name, value }) => {
  const type = isPrimary ? 'submit' : 'button';
  const classNames = isPrimary ? 'button primary' : 'button';
  const disabled = isDisabled ? 'disabled' : null;

  return (
    <input
      className={classNames}
      disabled={disabled}
      name={name}
      onClick={onClick}
      type={type}
      value={value}/>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Button;
