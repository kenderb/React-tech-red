/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import asideMenuList from './constans';
import './AsideBar.style.css';
import MailLogo from '../assets/images/logo_white.svg';
import { toggleSideBar } from '../actions';

const AsideBar = ({ sideBar, toggleSideBar }) => {
  const displaySideBar = () => (sideBar ? '' : 'toggle-display');
  useEffect(() => {
    toggleSideBar();
  }, []);

  return (
    <>
      <aside className={`aside-bar ${displaySideBar()}`}>
        <div className="main-image-container">
          <img src={MailLogo} alt={MailLogo} className="main-logo" />
        </div>
        <ul>
          {
            asideMenuList.map(item => (
              <li key={item.id} className="item-container">
                <Link to={item.path} onClick={() => toggleSideBar()}>
                  <img src={item.url} alt={item.url} />
                  <p>{item.name}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </aside>
      <div className={!sideBar ? 'black-bg' : ''} onClick={() => toggleSideBar()} />
    </>

  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar,
});

AsideBar.propTypes = {
  sideBar: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { toggleSideBar })(AsideBar);
