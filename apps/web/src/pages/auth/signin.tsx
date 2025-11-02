import { Link } from 'react-router';
import { SignInForm } from '../../features/auth/SignInForm';
import { PageTransition } from '../../components/PageTransition';

const SignIn = () => (
  <PageTransition>
    <SignInForm className="w-80" />
    <br></br>
    <div className="text-center text-sm col-span-2">
      <Link to="/restore-password">Restore password</Link>
    </div>
  </PageTransition>
);

export { SignIn };
