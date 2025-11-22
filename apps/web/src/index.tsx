import ReactDOM from 'react-dom/client';
import '@webx/ui/index.css';
import './styles/index.css';
import { App } from './app';
import { ThemeSwitcherProvider } from './provider/ThemeSwitcher';
import { StrictMode } from 'react';
import { AuthProvider } from './provider/Auth';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeSwitcherProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeSwitcherProvider>
  </StrictMode>,
);
