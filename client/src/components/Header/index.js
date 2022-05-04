import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}

const Header = () => {
  return (
    <header style={styles.header}>
      <div>
        <Link to="/">
          <h1>Pixel Mixup</h1>
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
