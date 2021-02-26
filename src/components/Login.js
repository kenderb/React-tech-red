import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authUser } from '../actions';

const Login = ({ authUser }) => {
  const [type, setType] = useState('User');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    authUser({ email, password, type });
  };
  return (
    <main>
      <form onSubmit={e => handelSubmit(e)}>
        <input onChange={e => setType(e.target.value)} type="text" placeholder="User name" value="User" />
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="email" />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

Login.propTypes = {
  authUser: PropTypes.func.isRequired,
};

export default connect(null, { authUser })(Login);
