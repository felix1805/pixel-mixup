import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  canvas: {
    display: 'flex',
    flexDirection: 'column',
  }
}

const Canvas = ({ canvasId, name }) => {
  return (
    <div key={canvasId} style={styles.canvas}>
      <h4>
        <Link to={`/users/${canvasId}`}>
          {name}
        </Link>
      </h4>
    </div>
  );
};

const CanvasList = ({ canvases, name }) => {
  if (!canvases.length) return <h3 className="aside">No Canvases</h3>;

  const renderCanvases = () => {
    if (!canvases) return null;
    return canvases.map(canvas => <Canvas key={canvas.canvasId} {...canvas} />);
  }

  return (
    <div style={styles.canvas}>
      <h3>{name}</h3>
      {renderCanvases()}
    </div>
  );
};

export default CanvasList;
