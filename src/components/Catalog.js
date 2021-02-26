import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getTop10Catalog } from '../actions';

const Catalog = ({ user, top10, getTop10Catalog }) => {
  const { jwttoken } = user.user;

  useEffect(() => {
    getTop10Catalog(jwttoken);
  }, [getTop10Catalog]);

  if (!user.isLoggedIn) return <Redirect to="/loging" />;
  if (top10.data) {
    return (
      <>
        <h1> Top list </h1>
        <ul>
          {
            top10.data.map(product => (
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
  top10: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object).isRequired,
  getTop10Catalog: PropTypes.func.isRequired,
};

Catalog.defaultProps = {
  top10: { data: [] },
};

const mapStateToProps = state => ({
  top10: state.top10,
  user: state.user,
});

export default connect(mapStateToProps, { getTop10Catalog })(Catalog);
