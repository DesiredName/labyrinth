import ReactDOM from 'react-dom/client';
import '@webx/ui/index.css';
import './styles/index.css';
import { App } from './app';
import { ThemeSwitcherProvider } from './provider/ThemeSwitcher';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </StrictMode>,
);
