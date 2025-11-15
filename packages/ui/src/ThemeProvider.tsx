import { createContext, useContext } from 'react';
import type { Theme } from './theme';

const ThemeContext = createContext<Theme>({});

export const useTheme = () => useContext(ThemeContext);

interface Props {
  theme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme = {}, children }: Props) => {
  return (
    <ThemeContext.Provider value={theme}>
      <div style={theme as React.CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  );
};
