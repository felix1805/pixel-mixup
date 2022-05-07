import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <div class='navbar'>
        <Link class="btn-border nav-btn btn-1" to="/">
          MY PROFILE
        </Link>
        <button class="btn-border nav-btn btn-1" onClick={logout}>

          LOGOUT
        </button>
      </div>
    );
  }
  // If logged out show login controls
  return (
    <div class="navbar">
      <div class="btn-border">
        <Link class="redirect btn-1" to="/login">
          LOGIN
        </Link>
      </div>
      <div class="btn-border">
        <Link class="redirect btn-1" to="/signup">
          SIGNUP
        </Link>
      </div>
    </div>
  )
}

export default Navbar
