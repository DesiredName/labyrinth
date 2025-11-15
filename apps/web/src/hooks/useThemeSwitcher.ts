import { useEffect, useState } from 'react';

const AppThemeSwitch = ['light', 'dark', 'system'] as const;
type AppThemeSwitchType = (typeof AppThemeSwitch)[number];

const useThemeSwitcher = () => {
  const themeStorageKey = 'app-theme';
  const [theme, setTheme] = useState<AppThemeSwitchType>('system');

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme);
    document.body.parentElement!.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const stored = window.localStorage.getItem(
      themeStorageKey,
    ) as unknown as AppThemeSwitchType;
    const parsed: AppThemeSwitchType = AppThemeSwitch.includes(stored)
      ? stored
      : 'system';

    setTheme(parsed);
  }, []);

  const handleSetNextTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme,
    setTheme,
    handleSetNextTheme,
  };
};

export { useThemeSwitcher };
