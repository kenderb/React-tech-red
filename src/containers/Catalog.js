import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getTop10Catalog, filterCatalog } from '../actions';
import NavFilter from '../components/NavFilter';

const Catalog = ({
  user, catalog, getTop10Catalog, filterCatalog,
}) => {
  const { jwttoken } = user.user;

  useEffect(() => {
    getTop10Catalog(jwttoken);
  }, [getTop10Catalog]);

  const handleTop10Catalog = () => {
    getTop10Catalog(jwttoken);
  };

  const HadleAppsFilter = category => {
    filterCatalog(jwttoken, category);
    console.log('filter', category);
  };

  if (!user.isLoggedIn) return <Redirect to="/loging" />;
  if (catalog.data) {
    return (
      <>
        <NavFilter
          getTop10={handleTop10Catalog}
          onFilter={HadleAppsFilter}
        />
        <ul>
          {
            catalog.data.map(product => (
              <li key={product.id}>
                <img src={product.image.thumb.url} alt={product.image} />
                {product.name}
                <p>{product.value}</p>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
  return <h1>Loading..</h1>;
};

Catalog.propTypes = {
  catalog: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object).isRequired,
  getTop10Catalog: PropTypes.func.isRequired,
  filterCatalog: PropTypes.func.isRequired,
};

Catalog.defaultProps = {
  catalog: { data: [] },
};

const mapStateToProps = state => ({
  catalog: state.catalog,
  user: state.user,
});

export default connect(mapStateToProps, { getTop10Catalog, filterCatalog })(Catalog);
