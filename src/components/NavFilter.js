import React from 'react';
import PropTypes from 'prop-types';

const filterList = ['apps', 'bonos', 'paquetes', 'recargas'];
const NavFilter = ({ getTop10, onFilter }) => (
  <nav>
    <ul>
      <li>
        <button type="button" onClick={getTop10}> Top list </button>
      </li>
      {filterList.map(filter => (
        <li key={filter}>
          <button type="button" onClick={() => onFilter(filter)}>{filter}</button>
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
