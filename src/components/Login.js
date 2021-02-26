import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authUser } from '../actions';

const Login = ({ user, authUser }) => {
  const [type, setType] = useState('User');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    console.log('user', type);
    console.log('email', email);
    console.log('password', password);
    authUser({ email, password, type });
    console.log('summiting..');
  };
  console.log('user info: ', user);
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
  user: PropTypes.instanceOf(Object),
  authUser: PropTypes.func.isRequired,
};

Login.defaultProps = {
  user: {},
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { authUser })(Login);
