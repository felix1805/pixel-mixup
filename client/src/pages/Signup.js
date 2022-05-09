import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const styles = {
  footerDown: {
    marginBottom: '514px'
}
}

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <div className='centered-vert' style={styles.footerDown}>
        <form className='centered-vert' onSubmit={handleFormSubmit}>
          <input
            placeholder="Your username"
            name="username"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
          <input
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            placeholder="********"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button className="login-btn btn-1 btn-border" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <main>
      <div className='centered-vert login-signup'>
        <h4 className="header-lg">Sign Up</h4>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main >
  );
};

export default Signup;
