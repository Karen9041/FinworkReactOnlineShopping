import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import { Button } from 'antd';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='Navbar'>
        <div className='navbar'>
          <Link to='#' >
            <Button 
                className="header-button"
                type="link" 
                onClick={showSidebar}
                icon={<FaIcons.FaBars 
                size="100%" /> }/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-close'>
                <Button 
                    className="header-button"
                    type="link" 
                    icon={<AiIcons.AiOutlineClose 
                    size="100%" /> }/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;