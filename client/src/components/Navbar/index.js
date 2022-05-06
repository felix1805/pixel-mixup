import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '15px',
    marginRight: '10px'
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
        <Link style={{ backgroundColor: '#992154', padding: '10px', borderRadius: '15px', transform: 'rotate(15deg)', marginBottom: '20px'}} class="btn-border" to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button class="btn-border" style={{ transform: 'rotate(15deg)', backgroundColor: '#992154', padding: '10px', borderRadius: '15px', marginBottom: '20px'}} onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  // If logged out show login controls
  return (
    <div style={styles.navbar}>
      <div class="btn-border" style={{ transform: 'rotate(15deg)'}}>
        <Link style={{ backgroundColor: '#992154', padding: '10px', borderRadius: '15px'}} class="nav-btn btn-1" to="/login">
          LOGIN
        </Link>
      </div>
      <div class="btn-border" style={{ transform: 'rotate(15deg)'}}>
        <Link style={{ backgroundColor: '#992154', padding: '10px', borderRadius: '15px' }}class="nav-btn btn-1" to="/signup">
          SIGNUP
        </Link>
      </div>
    </div>
  )
}

export default Navbar
