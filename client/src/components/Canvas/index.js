import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const Canvas = () => {
  const overlayRef = useRef();
  const gridRef = useRef();
  const colorRef = useRef();
  const [coords, setCoords] = useState([]);
  const [context, setContext] = useState(null);

  useEffect(() => {
    setContext(overlayRef.current.getContext('2d'));
  }, []);

  useEffect(() => {
    if (context) {
      context.clearRect(0, 0, overlayRef.current.width, overlayRef.current.height);
      coords.forEach(({ x, y, color }) => {
        context.fillStyle = color;
        context.fillRect(x, y, 32, 32);
      })
    }
  }, [coords]);


  const handleImageClick = (event) => {
    console.log(overlayRef.current);
    console.log(gridRef.current);
    console.log(event);

    const x = (event.nativeEvent.offsetX % 32 !== 0 ? event.nativeEvent.offsetX - event.nativeEvent.offsetX % 32 : event.nativeEvent.offsetX);
    const y = (event.nativeEvent.offsetY % 32 !== 0 ? event.nativeEvent.offsetY - event.nativeEvent.offsetY % 32 : event.nativeEvent.offsetY);


    // gets the x and y position of the mouse at the time of clicking
    console.log("X:", event.nativeEvent.offsetX);
    console.log("Y:", event.nativeEvent.offsetY);
    // console.log('color value', selectedColor);

    const color = colorRef.current.value;

    console.log('color:', color);
    // adds coords {x,y} to localStorage
    setCoords(coords => [...coords, { x, y, color }]);
    // document.body.style.backgroundColor = `rgba(${rgba.join()})`;
  };
  return (
    <>
      <div id="selector-container">
        <input ref={colorRef} id='color-selector' type="color" />
      </div>
      <canvas ref={overlayRef} onClick={handleImageClick} id="overlay" width="512" height="512"></canvas>
      <div ref={gridRef} id="grid" width="512" height="512"></div>
    </>
  )
}

export default Canvas;