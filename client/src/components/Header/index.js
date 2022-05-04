import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const Header = () => {
  return (
    <header style={styles.header}>
      <div>
        <Link to="/">
          <h1>User List</h1>
        </Link>
      </div>
      <div>
        <p>Simple App to View Users.</p>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
