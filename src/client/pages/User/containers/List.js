import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { fetchUsers } from '../../../sagas/user';
import { getUserPath } from '../../../../utils/paths';

const List = (props) => {
  const { fetchUsers, user: { list }, history } = props;

  useEffect(() => {
    fetchUsers();
  }, []);

  const getUser = (id) => {
    history.push(getUserPath(id));
  };

  const getList = (list) => {
    return list.map((item, index) => {
      return (
        <div key={+index} onClick={() => getUser(item.id)}>{item.firstName}, {item.lastName}</div>
      );
    });
  };

  return (
    <>
      <h2>User list</h2>

      {
        !!list.length && getList(list)
      }
    </>
  )
};

List.propTypes = {
  fetchUsers: PropTypes.func,
  user: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
};

List.defaultProps = {
  fetchUsers: null,
  user: {},
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
