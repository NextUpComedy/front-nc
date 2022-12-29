import PropTypes from 'prop-types';

import { useAppSelector } from 'hooks';

import { Logo } from 'shared/components';
import './style.css';
import {
  Sidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import sidebarStyle from 'utils/SidebarStyle';
import checkUserType from 'utils/checkUserType';

function SideBar({ toggleSidebar }) {
  const {
    user: { roleId },
  } = useAppSelector((state) => state.checkAuth);
  const windowWidth = window.innerWidth;
  const items = checkUserType(roleId);
  return (
    <div className="sidebar">
      <div className="newside">
        <Sidebar
          width={windowWidth > 768 ? '100%' : '50%'}
          breakPoint="md"
          toggleSidebar={toggleSidebar}
          backgroundColor="white"
        >
          <div className="logodiv">
            <Logo className="logo" />
          </div>
          <Menu
            renderMenuItemStyles={sidebarStyle}
          >
            {items.map((item) => (item.children ? (
              <SubMenu
                key={item.title}
                label={item.title}
                className="sidebar-item-sub"
                prefix={<i className={item.icon} />}
              >
                {item.children.map((child) => (
                  <MenuItem
                    key={child.title}
                    routerLink={(
                      <NavLink
                        to={child.path}
                        className="sidebar-item"
                      />
                      )}
                  >
                    {child.title}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={item.title}
                prefix={<i className={item.icon} />}
                routerLink={(
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className="sidebar-item"
                  />
                  )}
              >
                {item.title}
              </MenuItem>
            )))}
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}

export default SideBar;
SideBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
