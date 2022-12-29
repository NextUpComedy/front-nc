import 'antd/dist/antd.min.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { useAuth } from 'hooks';
import { DashboardLayout } from 'layouts';
import {
  NotFound,
  AdminStatisticsPage,
  StatisticsPage,
  LandingPage,
} from 'pages';
import { ProtectLogin, ProtectedRoute, Logout } from 'middleware';
import {
  routes,
  adminRoutes,
  comedianRoutes,
  masterAdminRoutes,
} from 'shared/objects/Routes';
import { ROLES } from 'shared/constants';
import './app.css';
import { routesBasedOnRole } from 'shared/objects/Users';

function App() {
  const { roleId } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/logout" element={<Logout />} />
        <Route
          index
          element={(
            <ProtectLogin>
              <LandingPage />
            </ProtectLogin>
          )}
        />
        {routes.map(({ key, path, Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Route>
      <Route
        path="dashboard"
        element={(
          <ProSidebarProvider>
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          </ProSidebarProvider>
        )}
      >
        {roleId === ROLES.ADMIN
          ? routesBasedOnRole(roleId, adminRoutes, AdminStatisticsPage)
          : roleId === ROLES.COMEDIAN
            ? routesBasedOnRole(roleId, comedianRoutes, StatisticsPage)
            : roleId === ROLES.MASTER_ADMIN || roleId === ROLES.SYSTEM
              ? routesBasedOnRole(roleId, masterAdminRoutes, AdminStatisticsPage)
              : null}

        <Route
          path="*"
          element={(
            <NotFound
              link="/dashboard"
              pageClassName="not-found-dashboard-container"
              title="Back To Dashboard"
            />
          )}
        />
      </Route>
      <Route
        path="*"
        element={(
          <NotFound
            link="/"
            pageClassName="not-found-dashboard-container"
            title="Back To Log In"
          />
        )}
      />
    </Routes>
  );
}

export default App;
