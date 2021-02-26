import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Logout = ({ user }) => {
  const handleLogOut = () => {
    console.log('??');
    localStorage.removeItem('authUser');
  };

  if (!user.isLoggedIn) {
    return <Redirect to="/loging" />;
  }
  return (<button type="button" onClick={handleLogOut}>Logout</button>);
};

Logout.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(Logout);
