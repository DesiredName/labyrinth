import { useContext } from 'react';
import {
  ThemeSwitcherContext,
  type ThemeSwitcherContextType,
} from './ThemeSwitcherContext';

const useThemeSwitcher = (): ThemeSwitcherContextType => {
  const context = useContext(ThemeSwitcherContext);
  if (!context) {
    throw new Error(
      'useThemeSwitcher  must be used within a ThemeSwitcherProvider',
    );
  }
  return context;
};

export { useThemeSwitcher };
