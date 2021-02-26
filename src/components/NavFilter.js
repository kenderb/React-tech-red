import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NavFilter.style.css';
import moneyIcon from '../assets/images/moneyIcon.svg';
import magnifyingGlass from '../assets/images/magnifyingGlass.svg';

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
        <li className="desktop-filter-button aling-rigth">
          <button type="button" className="orange-button">
            <img src={moneyIcon} alt={moneyIcon} className="money-icon" />
            <p>
              $ 100.000
            </p>
          </button>
        </li>
        <li className="desktop-filter-button">
          <button type="button" className="magnifying-Glass">
            <img src={magnifyingGlass} alt={magnifyingGlass} />
          </button>
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
