import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
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
        <Link class="nav-btn btn-1" to="/me">
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
      <div class="btn-border">
        <Link class="nav-btn btn-1" to="/login">
          Login
        </Link>
      </div>
      <div class="btn-border">
        <Link class="nav-btn btn-1" to="/signup">
          Signup
        </Link>
      </div>
    </div>
  )
}

export default Navbar
