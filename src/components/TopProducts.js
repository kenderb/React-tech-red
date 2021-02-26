import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getCatalog } from '../actions';

const TopProducts = ({ user, top10, getCatalog }) => {
  const { jwttoken } = user.user;

  useEffect(() => {
    getCatalog(jwttoken);
  }, [getCatalog]);

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

TopProducts.propTypes = {
  top10: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object).isRequired,
  getCatalog: PropTypes.func.isRequired,
};

TopProducts.defaultProps = {
  top10: { data: [] },
};

const mapStateToProps = state => ({
  top10: state.top10,
  user: state.user,
});

export default connect(mapStateToProps, { getCatalog })(TopProducts);
