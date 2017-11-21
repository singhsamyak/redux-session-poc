import React from 'react';
import PropTypes from 'prop-types';

const Account = ({ username }) => (
  <section className='account'>
    <h1>Your session has started.</h1>
  </section>
);

Account.propTypes = {
  username: PropTypes.string
};

export default Account;
