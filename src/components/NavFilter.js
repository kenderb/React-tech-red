import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NavFilter.style.css';

const filterList = [
  {
    id: 2,
    name: 'paquetes',
  },
  {
    id: 1,
    name: 'recargas',
  },
];

const NavFilter = ({ getTop10, onFilter }) => {
  const [currentSelected, setCurrentSelected] = useState('top10');

  const handleOnClick = filter => {
    onFilter(filter.id);
    setCurrentSelected(filter.name);
  };

  const handleOnClickTop = (getTop10, category) => {
    getTop10();
    setCurrentSelected(category);
  };

  const activedChange = category => (
    currentSelected === category ? 'actived-button' : ''
  );

  return (
    <nav>
      <ul className="list-container">
        <li>
          <button
            type="button"
            onClick={() => handleOnClickTop(getTop10, 'top10')}
            className={`normal-button ${activedChange('top10')}`}
          >
            top10
          </button>
        </li>
        {filterList.map(filter => (
          <li key={filter.id}>
            <button
              type="button"
              onClick={() => handleOnClick(filter)}
              className={`normal-button ${activedChange(filter.name)}`}
            >
              {filter.name}
            </button>
          </li>
        ))}
        <li className="desktop-filter-button">
          <button type="button"> orange button</button>
        </li>
        <li className="desktop-filter-button">
          <button type="button"> maginify glass</button>
        </li>
      </ul>
    </nav>
  );
};

NavFilter.propTypes = {
  getTop10: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default NavFilter;
