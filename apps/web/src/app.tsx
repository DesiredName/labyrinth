import { AppRouter } from './router/AppRouter';
import '@webx/ui/index.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router';
import { brightTheme, darkTheme, ThemeProvider } from '@webx/ui';
import { AuthProvider } from './provider/AuthProvider';
import { useThemeSwitcher } from './provider/ThemeSwitcher';

const App = () => {
  const { theme } = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : brightTheme}>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { App };
