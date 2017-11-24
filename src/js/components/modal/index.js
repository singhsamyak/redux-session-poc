import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const Modal = ({ context, handleCloseModal, message, title }) => {
  const classNames = `modal ${context}`;

  return (
    <section className={classNames}>
      <h1>{title}</h1>
      <p>{message}</p>
      <Button
        isPrimary={true}
        name='session-warning-close'
        onClick={handleCloseModal}
        value='Okay'/>
    </section>
  );
};

Modal.propTypes = {
  context: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Modal;
