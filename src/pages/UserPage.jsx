import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Orders from '../components/Orders/Orders';

const UserPage = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Orders />
    </Fragment>
  );
}

export default UserPage;
