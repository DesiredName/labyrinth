import { BrandLogo } from '../BrandLogo';
import { ThemeSwitcher } from '../ThemeSwitcher';

const Topbar = () => {
  return (
    <nav className="h-10 flex justify-between items-center min-w-0 gap-3 px-1">
      <div className="grow-0">
        <BrandLogo className="text-2xl" />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export { Topbar };
