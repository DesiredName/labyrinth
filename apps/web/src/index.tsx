import ReactDOM from 'react-dom/client';
import { AppRouter } from './router/AppRouter';
import '@webx/ui/index.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import { ThemeSwitchProvider } from './context/ThemeSwitchContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeSwitchProvider>
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  </ThemeSwitchProvider>,
);
