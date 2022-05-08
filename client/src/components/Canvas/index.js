import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { useMutation, useLazyQuery } from '@apollo/client';
import { ADD_TILE } from '../../utils/mutations';
import { GET_TILES } from '../../utils/queries';

const Canvas = () => {
  // ROUTER PARAMS
  const { canvasId } = useParams();
  // LAZY QUERY & MUTATION
  const [getTiles] = useLazyQuery(GET_TILES, {
    variables: { canvasId },
  });
  const [addTile] = useMutation(ADD_TILE);
  // STATE
  const [tiles, setTiles] = useState([]);
  const [context, setContext] = useState(null);
  // REFERENCES
  const overlayRef = useRef();
  const gridRef = useRef();
  const colorRef = useRef();
  // EFFECTS
  useEffect(() => {
    if (overlayRef.current) {
      setContext(overlayRef.current.getContext('2d'));
    }
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getTiles({ variables: { canvasId } });
      setTiles(data.tiles);
    })();
  }, [canvasId, getTiles]);

  useEffect(() => {
    const updateGrid = () => {
      const refWidth = overlayRef.current.width;
      const refHeight = overlayRef.current.height;

      context.clearRect(0, 0, refWidth, refHeight);

      tiles.forEach(({ x, y, color }) => {
        context.fillStyle = color;
        context.fillRect(x, y, 32, 32);
      })
    };
    if (tiles.length) updateGrid();
  }, [tiles]);

  /*-----------------------*/

  const handleImageClick = async (event) => {
    event.preventDefault();
    if (context) {
      const xPos = event.nativeEvent.offsetX;
      const yPos = event.nativeEvent.offsetY;
      const color = colorRef.current.value;
      const x = (xPos % 32 !== 0 ? xPos - xPos % 32 : xPos);
      const y = (yPos % 32 !== 0 ? yPos - yPos % 32 : yPos);
      const variables = { x, y, color, canvasId };
      try {
        const { data } = await addTile({ variables });
        setTiles(data.addTile);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (<>
    <div id="artbox">
      <div id='selector-container'>
        <div className='color-picker'>
          <p className='text-center'>Color Selector</p>
          <input ref={colorRef} id='color-selector' type="color" defaultValue={'#ffffff'} />
        </div>
      </div>
      <div ref={gridRef} id="grid" width="512" height="512">
        <canvas ref={overlayRef} onClick={handleImageClick} id="overlay" width="512" height="512">
        </canvas>
      </div>
    </div>
  </>
  )
}

export default Canvas;