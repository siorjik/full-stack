import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  const { navigationData } = props;

  const getNavigation = (data) => {
    return data.map((item, index) => {
      return (
        <NavLink exact key={+index} activeClassName="selected" to={item.path}>{item.title}</NavLink>  
      );
    });
  };

  return (
    <div className="navigation">
      {getNavigation(navigationData)}
    </div>
  );
};

Navigation.propTypes = {
  navigationData: PropTypes.arrayOf(PropTypes.shape()),
};

Navigation.defaultProps = {
  navigationData: [],
};

export default Navigation;
