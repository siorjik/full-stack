import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { List } from 'antd';

import { fetchUsers } from '../../../sagas/user';
import { getUserPath } from '../../../../utils/paths';

const UserList = (props) => {
  const { fetchUsers, user: { list }, history } = props;

  useEffect(() => {
    fetchUsers();
  }, []);

  const getUser = (id) => history.push(getUserPath(id));

  return (
    <>
      {
        !!list.length &&
        <div className="list-wrap">
          <List
            header={<h3>Users</h3>}
            bordered
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item>
                <div className="list-item" onClick={() => getUser(item.id)}>{index + 1}. {item.login}</div>
              </List.Item>
            )}
          />
        </div>
      }
    </>
  )
};

UserList.propTypes = {
  fetchUsers: PropTypes.func,
  user: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
};

UserList.defaultProps = {
  fetchUsers: null,
  user: {},
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
