import React from 'react';
import { useThemeSwitch } from '../context/ThemeSwitchContext';
import { IconDarkTheme } from './Icons/dark-theme';
import { IconLightTheme } from './Icons/light-theme';
import { UIIcon } from '@webx/ui';

type BrandLogoProps = React.ComponentPropsWithoutRef<'div'>;

const ThemeSwitch = React.forwardRef<HTMLDivElement, BrandLogoProps>(
  ({ className, ...props }: BrandLogoProps, ref) => {
    const { theme, setTheme } = useThemeSwitch();

    const handleSetNextTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
      <UIIcon ref={ref} {...props} onClick={handleSetNextTheme}>
        {theme === 'dark' ? <IconDarkTheme /> : <IconLightTheme />}
      </UIIcon>
    );
  },
);

ThemeSwitch.displayName = 'ThemeSwitch';

export { ThemeSwitch };
