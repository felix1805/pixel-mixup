import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
      <div className="centered-vert">
        <form className='centered-vert' onSubmit={handleFormSubmit}>
          <input
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <main>
      <div className='centered-vert'>
        <h4>Login</h4>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
