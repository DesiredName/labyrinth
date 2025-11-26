import { Link } from 'react-router';
import { PageTransition } from '../../components/PageTransition';
import { RegisterForm } from '../../features/auth/RegisterForm';

const Register = () => (
  <PageTransition>
    <RegisterForm className="w-80" />
    <br></br>
    <div className="text-center text-sm col-span-2">
      <Link to="/restore-password">Restore password</Link>
    </div>
  </PageTransition>
);

export { Register };
