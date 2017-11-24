import React from 'react';
import Account from '../../containers/Account';
import Login from '../../containers/Login';
import Modal from '../modal';
import Overlay from '../overlay';
import SessionExpired from '../session-expired';

const Page = ({ handleCloseModal, pageToDisplay, showSessionWarning }) => {
  const SessionWarning = (
    <section>
      <Overlay/>
      <Modal
        context='session-warning'
        handleCloseModal={handleCloseModal}
        title='Session Warning'
        message='Your session is about to expire'/>
    </section>
  );

  return (
    <main className='page'>
      <div className='container'>
        { showSessionWarning ? SessionWarning : null }
        { _renderCurrentPage(pageToDisplay) }
      </div>
    </main>
  );
};

const _renderCurrentPage = (pageToDisplay) => {
  switch (pageToDisplay) {
    case 'login':
      return <Login/>;
    case 'account':
      return <Account/>;
    case 'session-expired':
      return <SessionExpired/>
    default:
      return <Login/>;
  };
}

export default Page;
