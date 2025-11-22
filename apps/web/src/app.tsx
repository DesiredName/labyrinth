import '@webx/ui/index.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router';
import { AppRouter } from './routes';
import { useThemeSwitcher } from './provider/ThemeSwitcher';
import { brightTheme, darkTheme, ThemeProvider } from '@webx/ui';

const App = () => {
  const { theme } = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : brightTheme}>
      <div className="bg-(--color-primary) text-(--color-secondary)">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export { App };
