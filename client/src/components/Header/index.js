import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import image from '../../../src/components/Header';

const Header = () => {
  return (
    <header id="gameboy">
      <div></div>
      <div className="title">
        <Link style={{ backgroundColor: 'grey' }} to="/" className="btn-1">
          <div style={{ padding: '10px' }}>
            <h1>
              <span id="pixelLetter" style={{ color: 'red', marginRight: '3px' }}>
                P
              </span>
              <span id="pixelLetter" style={{ color: 'yellow', marginRight: '3px' }}>
                I
              </span>
              <span id="pixelLetter" style={{ color: 'blue', marginRight: '3px' }}>
                X
              </span>
              <span id="pixelLetter" style={{ color: 'green', marginRight: '3px' }}>
                E
              </span>
              <span id="pixelLetter" style={{ color: 'orange', marginRight: '3px' }}>
                L
              </span>
              <span>
              🕹️
              </span>
              <span id="pixelLetter" style={{ color: 'purple', marginRight: '3px', marginLeft: '5px' }}>
                M
              </span>
              <span id="pixelLetter" style={{ color: 'red', marginRight: '3px' }}>
                I
              </span>
              <span id="pixelLetter" style={{ color: 'yellow', marginRight: '3px' }}>
                X
              </span>
              <span id="pixelLetter" style={{ color: 'blue', marginRight: '3px' }}>
                U
              </span>
              <span id="pixelLetter" style={{ color: 'green' }}>
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
