import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { fetchUser } from '../../../sagas/user';

const Info = (props) => {
  const { match: { params }, fetchUser} = props;

  useEffect(() => {
    fetchUser(params.id);
  }, []);

  return (
    <h2>User Info</h2>
  )
};

Info.propTypes = {
  user: PropTypes.shape(),
  fetchUser: PropTypes.func,
  match: PropTypes.shape().isRequired,
};

Info.defaultProps ={
  user: {},
  fetchUser: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Info));
