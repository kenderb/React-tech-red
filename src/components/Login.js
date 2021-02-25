import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authUser } from '../actions';

const Login = ({ user, authUser }) => {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handelSubmit = e => {
    e.preventDefault();
    const type = userRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('user', userRef.current.value);
    console.log('email', emailRef.current.value);
    console.log('password', passwordRef.current.value);
    authUser({ email, password, type });
    console.log('summiting..');
  };
  console.log('user info: ', user);
  return (
    <main>
      <form onSubmit={e => handelSubmit(e)}>
        <input ref={userRef} type="text" placeholder="User name" value="User" />
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
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
