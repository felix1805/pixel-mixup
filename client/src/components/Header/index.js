import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import image from '../../../src/components/Header';

const Header = () => {
  return (
    <header id="gameboy">
      <div></div>
      <div class="title">
        <Link style={{ backgroundColor: 'grey' }} to="/" class="btn-1">
          <div style={{ padding: '10px' }}>
            <h1>
              <span style={{ color: 'red', marginRight: '3px' }}>
                P
              </span>
              <span style={{ color: 'yellow', marginRight: '3px' }}>
                I
              </span>
              <span style={{ color: 'blue', marginRight: '3px' }}>
                X
              </span>
              <span style={{ color: 'green', marginRight: '3px' }}>
                E
              </span>
              <span style={{ color: 'orange', marginRight: '3px' }}>
                L
              </span>
              <span>
                🕹️
              </span>
              <span style={{ color: 'purple', marginRight: '3px' }}>
                M
              </span>
              <span style={{ color: 'red', marginRight: '3px' }}>
                I
              </span>
              <span style={{ color: 'yellow', marginRight: '3px' }}>
                X
              </span>
              <span style={{ color: 'blue', marginRight: '3px' }}>
                U
              </span>
              <span style={{ color: 'green' }}>
                P
              </span>
            </h1>
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
