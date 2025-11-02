import { Link } from 'react-router';
import { SignUpForm } from '../../features/auth/SignUpForm';
import { PageTransition } from '../../components/PageTransition';

const SignUp = () => (
  <PageTransition>
    <SignUpForm className="w-80" />
    <br></br>
    <div className="text-center text-sm col-span-2">
      <Link to="/restore-password">Restore password</Link>
    </div>
  </PageTransition>
);

export { SignUp };
