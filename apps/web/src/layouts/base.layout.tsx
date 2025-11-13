import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';

const BaseLayout = () => {
  return (
    <div className="min-w-dvh h-dvh flex flex-col">
      <div className="bg-gray-200">
        <Topbar />
      </div>
      <div className="flex flex-row min-w-0 flex-1 min-h-0 overflow-hidden bg-gray-200">
        <div className="w-56">
          <Sidebar />
        </div>
        <div className="flex-1 min-h-0 min-w-0 overflow-hidden rounded-tl-md">
          <div className="w-full h-full overflow-auto bg-gray-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BaseLayout };
