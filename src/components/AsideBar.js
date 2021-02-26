import React from 'react';
import asideMenuList from './constans';
import './AsideBar.style.css';
import MailLogo from '../assets/images/logo_white.svg';

const AsideBar = () => (
  <aside className="aside-bar">
    <div className="main-image-container">
      <img src={MailLogo} alt={MailLogo} className="main-logo" />

    </div>
    <ul>
      {
        asideMenuList.map(item => (
          <li key={item.key} className="item-container">
            <a href={item.path}>
              <img src={item.url} alt={item.url} />
              <p>{item.name}</p>
            </a>
          </li>
        ))
      }
    </ul>
  </aside>
);

export default AsideBar;