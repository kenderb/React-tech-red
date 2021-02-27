import React, { useEffect } from 'react';
import './NavHeader.style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import hamburger from '../assets/images/Hamburguesa.svg';
import { toggleSideBar } from '../actions';

const NavHeader = ({ toggleSideBar }) => {
  useEffect(() => {
    toggleSideBar();
  }, []);
  return (
    <header className="header-container">
      <button type="button" onClick={() => toggleSideBar()} className="hamburguer-button">
        <img src={hamburger} alt={hamburger} />
      </button>
    </header>
  );
};

NavHeader.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
};
export default connect(null, { toggleSideBar })(NavHeader);
