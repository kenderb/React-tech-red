import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authUser } from '../actions';

const Login = ({ user, authUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    authUser({ email, password, type: 'User' });
  };

  if (user.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <main>
      <form onSubmit={e => handelSubmit(e)}>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="email" />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

Login.propTypes = {
  authUser: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { authUser })(Login);
