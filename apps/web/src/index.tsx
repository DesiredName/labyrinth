import ReactDOM from 'react-dom/client';
import '@webx/ui/index.css';
import './styles/index.css';
import { App } from './app';
import { ThemeSwitcherProvider } from './provider/ThemeSwitcher';
import { StrictMode } from 'react';
import { AuthProvider } from './provider/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ServerAPIProvider } from './provider/ServerAPI';
import { DialogsProvider } from './provider/Dialogs';
import { DialogHost } from './components/Dialog/DialogHost';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ServerAPIProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <DialogsProvider>
            <ThemeSwitcherProvider>
              <App />
              <DialogHost />
            </ThemeSwitcherProvider>
          </DialogsProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ServerAPIProvider>
  </StrictMode>,
);
