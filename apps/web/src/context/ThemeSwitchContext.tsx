import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

const AppThemeSwitch = ['light', 'dark', 'system'] as const;
type AppThemeSwitchType = (typeof AppThemeSwitch)[number];

interface IThemeSwitchContext {
  theme: AppThemeSwitchType;
  setTheme: (theme: AppThemeSwitchType) => void;
  handleSetNextTheme: () => void;
}

const ThemeSwitchContext = createContext<IThemeSwitchContext | undefined>(
  undefined,
);

const ThemeSwitchProvider: React.FC<{ children: ReactNode }> = (props) => {
  const themeStorageKey = 'app-theme';
  const [theme, setTheme] = useState<AppThemeSwitchType>('system');

  const updateTheme = () =>
    (document.body.parentElement!.dataset.theme = theme);

  const handleSetNextTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const stored = window.localStorage.getItem(
      themeStorageKey,
    ) as unknown as AppThemeSwitchType;
    const parsed: AppThemeSwitchType = AppThemeSwitch.includes(stored)
      ? stored
      : 'system';

    setTheme(parsed);
    updateTheme();
  }, []);

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme);
    updateTheme();
  }, [theme]);

  return (
    <ThemeSwitchContext.Provider
      value={{ theme, setTheme, handleSetNextTheme }}
    >
      {props.children}
    </ThemeSwitchContext.Provider>
  );
};

const useThemeSwitch = (): IThemeSwitchContext => {
  const context = useContext(ThemeSwitchContext);
  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }
  return context;
};

export { ThemeSwitchProvider, useThemeSwitch };
