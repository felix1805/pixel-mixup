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
      <div className='navbar'>
        <Link className="btn-border btn-1" to="/">
          MY STUDIO
        </Link>
        <button className="btn-border btn-1 wht-btn" onClick={logout}>
          LOGOUT
        </button>
      </div>
    );
  }
  // If logged out show login controls
  return (
    <div className="navbar">
      <div className="btn-border">
        <Link className="redirect btn-1" to="/login">
          LOGIN
        </Link>
      </div>
      <div className="btn-border">
        <Link className="redirect btn-1" to="/signup">
          SIGNUP
        </Link>
      </div>
    </div>
  )
}

export default Navbar
