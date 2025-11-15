import { createContext } from 'react';
import type { AppThemeSwitchType } from './themes';

type ThemeSwitcherContextType = {
  theme: AppThemeSwitchType;
  setTheme: (t: AppThemeSwitchType) => void;
  handleSetNextTheme: () => void;
};

const ThemeSwitcherContext = createContext<
  ThemeSwitcherContextType | undefined
>(undefined);

export { ThemeSwitcherContext };
export type { ThemeSwitcherContextType };
