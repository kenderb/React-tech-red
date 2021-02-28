import React, { useEffect } from 'react';
import './NavHeader.style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import hamburger from '../assets/images/Hamburguesa.svg';
import { toggleSideBar } from '../actions';

const NavHeader = ({ sideBar, toggleSideBar }) => {
  useEffect(() => {
    toggleSideBar();
  }, []);
  return (
    <header className={`header-container ${!sideBar ? 'hard-shadow' : ''}`}>
      <button type="button" onClick={() => toggleSideBar()} className="hamburguer-button">
        <img src={hamburger} alt={hamburger} />
      </button>
    </header>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar,
});
NavHeader.propTypes = {
  sideBar: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { toggleSideBar })(NavHeader);
