import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import {
  useProSidebar,
} from 'react-pro-sidebar';
import { Navbar, SideBar } from 'components';

export default function DashboardLayout() {
  const sideBarInLayout = useRef(null);
  const navbarInLayout = useRef(null);

  const { toggleSidebar } = useProSidebar();

  return (
    <div className="both">
      <div ref={sideBarInLayout} className="sidebarinlayout">
        <SideBar toggleSidebar={toggleSidebar} />
      </div>
      <div ref={navbarInLayout} className="navbarinlayout">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="Outletstyle">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
