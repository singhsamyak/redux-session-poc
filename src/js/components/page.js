import React from 'react';
import Login from '../containers/Login';
import Account from '../containers/Account';

const Page = () => (
  <main className='page'>
    <div className='container'>
      <Login/>
      <Account/>
    </div>
  </main>
);

export default Page;
