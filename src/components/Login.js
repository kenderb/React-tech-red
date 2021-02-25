import React, { useRef } from 'react';
// import { connect } from 'react-redux';

const Login = () => {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handelSubmit = e => {
    e.preventDefault();
    console.log('user', userRef.current.value);
    console.log('email', emailRef.current.value);
    console.log('password', passwordRef.current.value);
    console.log('summiting..');
  };

  return (
    <main>
      <form onSubmit={e => handelSubmit(e)}>
        <input ref={userRef} type="name" placeholder="User name" />
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

// const mapStateToProps = state => ({
//   user: state.user,
// });

export default Login;
