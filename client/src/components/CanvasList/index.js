import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  canvas: {
    display: 'flex',
    flexDirection: 'column',
  }
}

const Canvas = ({ _id, name }) => {
  return (
    <div className='centered-canvas-name' key={_id} >
      <h4>
        <Link to={`/canvas/${_id}`}>
          {name}
        </Link>
      </h4>
      <a href='#' >🗑️</a>
    </div>
  );
};



const CanvasList = ({ canvases, name }) => {
  if (!canvases.length) return <h3 className="aside">No Canvases</h3>;

  const renderCanvases = () => {
    if (!canvases) return null;
    return canvases.map(canvas => <Canvas key={canvas._id} {...canvas} />);
  }

  return (
    <div style={styles.canvas}>
      <h3>{name}</h3>
      {renderCanvases()}
    </div>
  );
};

export default CanvasList;
