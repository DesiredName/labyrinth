import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';

const BaseLayout = () => (
  <div className="base-layout">
    <Topbar />
    <Sidebar />
    <Outlet />
  </div>
);

export { BaseLayout };
