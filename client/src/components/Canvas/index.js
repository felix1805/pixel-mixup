import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TILE } from '../../utils/mutations';
import { GET_TILES } from '../../utils/queries';

const Canvas = () => {
  const { canvasId } = useParams();
  const { data, loading } = useQuery(GET_TILES, {
    variables: { canvasId }
  });
  const tiles = data?.tiles || [];

  const overlayRef = useRef();
  const gridRef = useRef();
  const colorRef = useRef();
  // const [coords, setCoords] = useState([]);
  const [context, setContext] = useState(null);


  useEffect(() => {
    if (!loading) {
      setContext(overlayRef.current.getContext('2d'));
    }
  }, [loading]);

  useEffect(() => {
    if (context) {
      context.clearRect(0, 0, overlayRef.current.width, overlayRef.current.height);
      tiles.forEach(({ x, y, color }) => {
        context.fillStyle = color;
        context.fillRect(x, y, 32, 32);
      })
    }
  }, [tiles, context]);

  const [addTile, { error }] = useMutation(ADD_TILE, {
    update(cache, { data: { addTile } }) {
      try {
        const { tiles } = cache.readQuery({ query: GET_TILES });

        cache.writeQuery({
          query: GET_TILES,
          data: { tiles: [...tiles, addTile] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleImageClick = async (event) => {
    event.preventDefault();

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
    try {
      console.log(canvasId);
      const { data } = await addTile({
        variables: { x, y, color, canvasId },
      });

      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
    // setCoords(coords => [...coords, { x, y, color }]);
    // document.body.style.backgroundColor = `rgba(${rgba.join()})`;

  };
  if (loading) {
    return <h1>loading...</h1>
  }
  return (
    <div id="artbox">
      <canvas ref={overlayRef} onClick={handleImageClick} id="overlay" width="512" height="512"></canvas>
      <div ref={gridRef} id="grid" width="512" height="512"></div>
      <div id='selector-container'>
      <input ref={colorRef} id='color-selector' type="color" />
      </div>
    </div>
  )
}

export default Canvas;