import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const Canvas = () => {
  const overlayRef = useRef();
  const gridRef = useRef();
  const colorRef = useRef();
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    console.log('change');
  }, [coords]);

  const handleImageClick = (event) => {
    console.log(overlayRef.current);
    console.log(gridRef.current);
    console.log(event);

    const x = 8 * (event.nativeEvent.offsetX % 2 !== 0 ? event.nativeEvent.offsetX - event.nativeEvent.offsetX % 2 : event.nativeEvent.offsetX);
    const y = 8 * (event.nativeEvent.offsetY % 2 !== 0 ? event.nativeEvent.offsetY - event.nativeEvent.offsetY % 2 : event.nativeEvent.offsetY);


    // gets the x and y position of the mouse at the time of clicking
    console.log("X:", event.nativeEvent.offsetX);
    console.log("Y:", event.nativeEvent.offsetY);
    // console.log('color value', selectedColor);

    const color = colorRef.current.value;
    const context = overlayRef.current.getContext('2d');
    context.fillStyle = color;
    context.fillRect(x, y, 16, 16);
    console.log('context:', context);


    console.log('color:', color);
    // adds coords {x,y} to localStorage
    setCoords(coords => [...coords, { x, y, color }]);
    // document.body.style.backgroundColor = `rgba(${rgba.join()})`;
  };
  return (
    <>
      <div>
        <input ref={colorRef} id='colorSelector' type="color" />
      </div>
      <canvas ref={overlayRef} onClick={handleImageClick} id="overlay" width="512" height="512"></canvas>
      <div ref={gridRef} id="grid" width="512" height="512"></div>
    </>
  )
}

export default Canvas;