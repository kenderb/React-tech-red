import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import asideMenuList from './constans';
import './AsideBar.style.css';
import MailLogo from '../assets/images/logo_white.svg';

const AsideBar = ({ sideBar }) => (
  <aside className="aside-bar" style={{ display: sideBar ? 'block' : 'none' }}>
    <div className="main-image-container">
      <img src={MailLogo} alt={MailLogo} className="main-logo" />
    </div>
    <ul>
      {
        asideMenuList.map(item => (
          <li key={item.key} className="item-container">
            <Link to={item.path}>
              <img src={item.url} alt={item.url} />
              <p>{item.name}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  </aside>
);

const mapStateToProps = state => ({
  sideBar: state.sideBar,
});

AsideBar.propTypes = {
  sideBar: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AsideBar);
