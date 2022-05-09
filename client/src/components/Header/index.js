import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div id="title">
        <Link to="/" className="redirect">
          <div>
            <h1><span id='pixel'>Pixel</span> <span id='mixup'>Mixup</span></h1>

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
