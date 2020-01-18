import React from 'react';
import Registration from './auth/Registration';

const Home = ({ loggedInStatus, handleSuccessfulAuth }) => {
  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {loggedInStatus}</h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  )
}

export default Home