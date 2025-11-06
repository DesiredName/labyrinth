import { Link } from 'react-router';
import { SignOutForm } from '../../features/auth/SignoutForm';
import { PageTransition } from '../../components/PageTransition';

const SignOut = () => (
  <PageTransition>
    <SignOutForm className="w-80" />
  </PageTransition>
);

export { SignOut };
