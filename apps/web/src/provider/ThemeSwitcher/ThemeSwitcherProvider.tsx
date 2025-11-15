import { useEffect, useState } from 'react';
import { AppThemeSwitch, type AppThemeSwitchType } from './themes';
import { ThemeSwitcherContext } from './ThemeSwitcherContext';

const ThemeSwitcherProvider = ({ children }: { children: React.ReactNode }) => {
  const themeStorageKey = 'app-theme';
  const [theme, setTheme] = useState<AppThemeSwitchType>('system');

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme);

    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.parentElement!.dataset.theme = isDark ? 'dark' : 'light';
    } else {
      document.body.parentElement!.dataset.theme = theme;
    }
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

  const handleSetNextTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeSwitcherContext.Provider
      value={{ theme, setTheme, handleSetNextTheme }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  );
};

export { ThemeSwitcherProvider };
