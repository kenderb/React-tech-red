import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authUser } from '../actions';
import logo from '../assets/images/logo.svg';
import logoWhite from '../assets/images/logo_white.svg';
import './Login.style.css';

const Login = ({ user, authUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    authUser({ email, password, type: 'User' });
  };

  if (user.isLoggedIn) return <Redirect to="/" />;
  return (
    <main className="login-page-container">
      <img src={logoWhite} alt={logoWhite} className="side-logo" />
      <form onSubmit={e => handelSubmit(e)} className="login-form">
        <img src={logo} alt={logo} />
        <p>Iniciar sesión</p>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Correo electrónico" />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Contrseña" />
        <a href="/">Recordar mi contraseña</a>
        <div className="button-containers">
          <button type="submit" className="coloredButton">INGRESAR</button>
          <div className="separator" />
          <button type="button" className="simpleButton">Crear cuenta</button>
        </div>
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
