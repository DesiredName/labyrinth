import { BrandLogo } from '../BrandLogo';
import { ThemeSwitcher } from '../ThemeSwitcher';

const Topbar = () => {
  return (
    <nav className="h-10 flex justify-between items-center min-w-0 gap-3 px-3 bg-gray-200 dark:bg-black/45">
      <div className="grow-0">
        <BrandLogo className="text-2xl" />
      </div>
      <div className="flex-1 flex justify-end">
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export { Topbar };
