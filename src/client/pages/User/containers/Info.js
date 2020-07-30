import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import { fetchUser } from '../../../sagas/user';

const Info = (props) => {
  const { match: { params }, fetchUser, user: { data }} = props;

  useEffect(() => {
    fetchUser(params.id);
  }, []);

  return (
    <>
      {
        !!Object.keys(data).length &&
        <Card title={<h3>User Info</h3>}>
          <p>First name: {data.firstName}</p>
          <p>Last name: {data.lastName}</p>
          <p>Login: {data.login}</p>
        </Card>
      }
    </>
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
