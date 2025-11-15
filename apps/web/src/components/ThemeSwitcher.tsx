import React from 'react';
import { IconDarkTheme } from './Icons/dark-theme';
import { IconLightTheme } from './Icons/light-theme';
import { UIIcon } from '@webx/ui';
import { useThemeSwitcherContext } from '../provider/ThemeSwitcherProvider';

type BrandLogoProps = React.ComponentPropsWithoutRef<'div'>;

const ThemeSwitcher = React.forwardRef<HTMLDivElement, BrandLogoProps>(
  ({ className, ...props }: BrandLogoProps, ref) => {
    const { theme, handleSetNextTheme } = useThemeSwitcherContext();

    return (
      <UIIcon ref={ref} {...props} onClick={handleSetNextTheme}>
        {theme === 'dark' ? <IconDarkTheme /> : <IconLightTheme />}
      </UIIcon>
    );
  },
);

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
