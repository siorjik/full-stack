import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';

import { userPath } from '../../../utils/paths';

export default () => (
  <aside className="side-bar">
    <Row>
      <Col span={24}><NavLink activeClassName="selected" to="/app">App</NavLink></Col>
      <Col span={24}><NavLink activeClassName="selected" to={userPath}>User</NavLink></Col>
    </Row>
  </aside>
);
