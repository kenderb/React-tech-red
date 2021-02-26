import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logOutSucces } from '../actions';

const Logout = ({ user, logOutSucces }) => {
  const handleLogOut = () => {
    console.log('??');
    logOutSucces();
  };

  if (!user.isLoggedIn) {
    return <Redirect to="/loging" />;
  }
  return (<button type="button" onClick={handleLogOut}>Logout</button>);
};

Logout.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  logOutSucces: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps, { logOutSucces })(Logout);
