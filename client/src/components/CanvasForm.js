import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CANVAS } from '../utils/mutations';

import Auth from '../utils/auth';

const CanvasForm = ({ name }) => {
  const [formState, setFormState] = useState({ name: '' });
  const navigate = useNavigate();

  const [addCanvas, { error }] = useMutation(ADD_CANVAS);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const {data} = await addCanvas({
        variables: { ...formState },
      });
      navigate(`/canvas/${data.addCanvas._id}`, {replace:true})
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Create your Canvas Below:</h4>

      {Auth.loggedIn() ? (
        <form
          onSubmit={handleFormSubmit}
          className='centered-vert'
        >
          <div>
            <input
              name="name"
              required
              placeholder="Name your Canvas:"
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit">
              CREATE CANVAS
            </button>
          </div>
          {error && (
            <div>
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to create a Canvas. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CanvasForm;