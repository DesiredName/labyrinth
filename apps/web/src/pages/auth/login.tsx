import { Link } from 'react-router';
import { LoginForm } from '../../features/auth/LoginForm';
import { PageTransition } from '../../components/PageTransition';

const Login = () => (
  <PageTransition>
    <LoginForm className="w-80" />
    <br></br>
    <div className="text-center text-sm col-span-2">
      <Link to="/restore-password">Restore password</Link>
    </div>
  </PageTransition>
);

export { Login };
