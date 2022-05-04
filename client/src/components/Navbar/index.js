import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'column',
  }
}

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <div style={styles.navbar}>
        <Link to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  // If logged out show login controls
  return (
    <div style={styles.navbar}>
      <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Signup
      </Link>
    </div>
  )
}

export default Navbar
