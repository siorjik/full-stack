import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Tabs } from 'antd';
import { ArrowLeftOutlined, LogoutOutlined } from '@ant-design/icons';

import UserForm from './UserForm';

import { updateUser } from '../../sagas/user';
import { fetchSession, removeSession } from '../../sagas/session';

import { loginPath } from '../../../utils/paths';

const { TabPane } = Tabs;

const Profile = (props) => {
  const { user, history, updateUser, fetchSession, removeSession } = props;

  const update = async (data) => {
    await updateUser(user.id, data);
    await fetchSession();
  }

  const deleteSession = () => {
    removeSession();
    localStorage.clear();
    window.location.href = loginPath;
  };

  return (
    <div className="profile-wrap">
      <div className="profile-wrap-header">
        <button className="icon-btn" onClick={() => history.goBack()}><ArrowLeftOutlined /></button>
        <button className="icon-btn" onClick={deleteSession}><LogoutOutlined /></button>
      </div>

      <div className="profile-wrap-content">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Info" key="1">
            <Card title="Profile info">
              <UserForm user={user} disabled={true} />
            </Card>
          </TabPane>

          <TabPane tab="Edit" key="2">
            <Card title="Profile edit">
              <UserForm user={user} update={update} disabled={false} />
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
  updateUser: PropTypes.func,
  fetchSession: PropTypes.func,
  removeSession: PropTypes.func,
};

Profile.defaultProps = {
  user: {},
  updateUser: null,
  fetchSession: null,
  removeSession: null,
};

const mapStateToProps = (state) => ({
  user: state.session.data.user,
});

const mapDispatchToProps = {
  updateUser,
  fetchSession,
  removeSession
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
