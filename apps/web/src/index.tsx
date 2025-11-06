import ReactDOM from 'react-dom/client';
import { AppRouter } from './router/AppRouter';
import '@webx/ui/index.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AuthProvider>,
);
