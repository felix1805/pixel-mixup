import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_CANVAS } from '../../utils/mutations';
import { QUERY_CANVASES } from '../../utils/queries';

const CanvasList = ({ canvases, isLoggedInUser = false }) => {
  const [deleteCanvas, { error }] = useMutation(DELETE_CANVAS, {
    update(cache, { data: { deleteCanvas } }) {
      try {
        cache.writeQuery({
          query: QUERY_CANVASES,
          data: { _id: deleteCanvas },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleDeleteCanvas = async (canvasId) => {
    try {
      const { data } = await deleteCanvas({
        variables: { canvasId },
      });
      window.location.replace('/');
    } catch (err) {
      console.error(err);
    }
  };

  if (!canvases.length) {
    return <h3>No Canvases Yet</h3>
  }

  return (
    <div className='margin-bottom'>
      <h3 className='aside'>Canvases</h3>
      {canvases &&
        canvases.map((canvas) => (
          <div id="tag-cont" key={canvas.name}>
            <h4 id="canvas-tags">
              <Link className="btn-rnd btn-border" to={`/canvas/${canvas._id}`}>
                {canvas.name}
              </Link>
                <button className="btn-rnd btn-border wht-btn"
                  onClick={() => handleDeleteCanvas(canvas._id)}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
            </h4>
          </div>
        ))}
      {error && (
        <div>{error.message}</div>
      )}
    </div>
  )
};

export default CanvasList;
