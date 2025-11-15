import { createContext, useContext, useEffect, useState } from 'react';

const AppThemeSwitch = ['light', 'dark', 'system'] as const;

type AppThemeSwitchType = (typeof AppThemeSwitch)[number];

type ThemeSwitcherContextType = {
  theme: AppThemeSwitchType;
  setTheme: (t: AppThemeSwitchType) => void;
  handleSetNextTheme: () => void;
};

const ThemeSwitcherContext = createContext<
  ThemeSwitcherContextType | undefined
>(undefined);

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

const useThemeSwitcherContext = (): ThemeSwitcherContextType => {
  const context = useContext(ThemeSwitcherContext);
  if (!context) {
    throw new Error(
      'useThemeSwitcherContext must be used within a ThemeSwitcherProvider',
    );
  }
  return context;
};

export { ThemeSwitcherProvider, useThemeSwitcherContext };
