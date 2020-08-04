import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import SideBar from './SideBar';

import { profilePath } from '../../../utils/paths';

const Layout = (props) => {
  const { children, history } = props;

  const isHideMenuLocal = localStorage.getItem('isHideMenu'); 
  const [isHide, setHide] = useState(+isHideMenuLocal);

  const toggleMenu = () => {
    const value = isHide ? 0 : 1;

    setHide(value);
    localStorage.setItem('isHideMenu', value);
  };

  return (
    <div className={`main-wrap ${isHide ? 'hide-menu' : 'show-menu'}`}>
      <SideBar />
      
      <main className="height-100-vh content">
        <div className="content-header">
          <button className="icon-btn" onClick={toggleMenu}>{isHide ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</button>
          <button className="icon-btn" onClick={() => history.push(profilePath)}><UserOutlined /></button>
        </div>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(Layout);
