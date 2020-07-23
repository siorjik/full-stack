import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';

export default () => (
  <aside className="side-bar">
    <Row>
      <Col span={24}><NavLink activeClassName="selected" to="/app">App</NavLink></Col>
      <Col span={24}><NavLink activeClassName="selected" to="/user">User</NavLink></Col>
    </Row>
  </aside>
);
