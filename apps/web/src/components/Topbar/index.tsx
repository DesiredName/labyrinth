import { useThemeSwitch } from '../../context/ThemeSwitchContext';
import { BrandLogo } from '../BrandLogo';
import { ThemeSwitch } from '../ThemeSwitch';

const Topbar = () => {
  return (
    <nav className="h-10 flex justify-between items-center min-w-0 gap-3 px-1">
      <div className="grow-0">
        <BrandLogo className="text-2xl" />
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export { Topbar };
