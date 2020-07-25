import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';

import { usersPath } from '../../../utils/paths';

export default () => (
  <aside className="side-bar">
    <Row>
      <Col span={24}><NavLink activeClassName="selected" to="/app">App</NavLink></Col>
      <Col span={24}><NavLink activeClassName="selected" to={usersPath}>User</NavLink></Col>
    </Row>
  </aside>
);
