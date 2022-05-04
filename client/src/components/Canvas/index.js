import React from 'react';
import styled from 'styled-components';
// import image from '../../imgs/'

// const styles = {
//   artContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     position: 'relative',
//     transform: 'scale(1)',
//     transformOrigin: 'center center',
//     width: '500px',
//     height: '500px',
//   },
//   tile: {
//     height: '50px',
//     width: '50px',
//     border: '1px solid black',
//     backgroundColor: 'red',
//   }
// }

const StyledCanvas = styled.div`
  & body, html {
    margin: 0;
    padding: 0;
  }
  body {
      position: relative;
      min-height: 100vh;
    }
  canvas,
  #grid { 
    position: absolute;
    left: 50%;
    top: 50%;
    width: 64px;
    height: 64px;
    transform: scale(8) translate(-50%, -50%);
    transform-origin: 0 0;
  }

  #grid,
  #overlay {
    width: 512px;
    height: 512px;
    transform: scale(1) translate(-50%, -50%);
  }

  #overlay,
  #grid {
    pointer-events: none;
  }

  #grid {
    border: 1px solid black;
    background-position: 0 0;
    background-repeat: repeat;
    background-image: url('./lines-again.png');
  }
`;

const BlankCanvas = () => {
  return (
    <StyledCanvas>
      <body>
        <canvas id="image" width="64" height="64"></canvas>
        <canvas id="overlay" width="512" height="512"></canvas>
        <div id="grid" width="512" height="512"></div>
        {/* <img src={image} alt='lines'></img> */}
      </body>
    </StyledCanvas>
  )
}

export default BlankCanvas;