import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logOutSucces } from '../actions';
import './Logout.style.css';
import LoggOutIcon from '../assets/images/LoggOutIcon.svg';
import NavHeader from '../components/NavHeader';
import AsideBar from '../components/AsideBar';

const Logout = ({ user, logOutSucces }) => {
  const handleLogOut = () => {
    logOutSucces();
  };

  if (!user.isLoggedIn) {
    return <Redirect to="/loging" />;
  }
  return (
    <main className="logout-main-wrapper">
      <div className="display-header">
        <NavHeader />
      </div>
      <AsideBar />
      <div className="logout-wrapper">
        <div className="logout-icon-container">
          <img src={LoggOutIcon} alt={LoggOutIcon} />
          <p>¿Estas seguro de cerrar tu sesión actual?</p>
        </div>
        <button type="button" onClick={handleLogOut} className="logout-button">SI, CERRAR SESIÓN</button>
      </div>
    </main>
  );
};

Logout.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  logOutSucces: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps, { logOutSucces })(Logout);
