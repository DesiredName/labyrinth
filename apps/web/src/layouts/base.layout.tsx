import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';

const BaseLayout = () => {
  return (
    <div className="w-full h-dvh flex flex-col">
      <div className="w-full">
        <Topbar />
      </div>
      <div className="flex flex-row min-w-0 flex-1 min-h-0 overflow-hidden">
        <div className="hidden md:flex flex-col justify-center px-2">
          <Sidebar />
        </div>
        <div className="flex-1 min-h-0 min-w-0 overflow-hidden rounded-tl-md">
          <div className="w-full h-full overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BaseLayout };
