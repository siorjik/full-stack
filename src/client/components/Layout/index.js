import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import SideBar from './SideBar';

const Layout = (props) => {
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
      
      <main className="content">
        <button onClick={toggleMenu}>{isHide ? <MenuUnfoldOutlined className="side-bar-toggle" /> : <MenuFoldOutlined className="side-bar-toggle" />}</button>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
