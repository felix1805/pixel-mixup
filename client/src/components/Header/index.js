import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import image from '../../../src/components/Header';

const Header = () => {
  return (
    <header>
      <div id="title">
        <Link to="/" id="redirect">
          <div>
            <h1>Pixel Mixup</h1>
          </div>
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
