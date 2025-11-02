import ReactDOM from 'react-dom/client';
import { AppRouter } from './router/AppRouter';
import '@webx/ui/index.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
);
