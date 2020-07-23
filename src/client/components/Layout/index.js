import React, { useState } from 'react';

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
        <button onClick={toggleMenu}>hide/show</button>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
