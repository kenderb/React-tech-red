import React from 'react';
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

const NavFilter = ({ getTop10, onFilter }) => (
  <nav>
    <ul className="list-container">
      <li>
        <button type="button" onClick={getTop10}>top10</button>
      </li>
      {filterList.map(filter => (
        <li key={filter.id}>
          <button type="button" onClick={() => onFilter(filter.id)}>{filter.name}</button>
        </li>
      ))}
    </ul>
  </nav>
);

NavFilter.propTypes = {
  getTop10: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default NavFilter;
