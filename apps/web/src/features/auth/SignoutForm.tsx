import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../context/AuthContext';
import { twMerge } from 'tailwind-merge';

type SignOutFormProps = React.ComponentPropsWithoutRef<'div'>;

const SignOutForm = ({ className, ...props }: SignOutFormProps) => {
  const { signout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    signout().finally(() => {
      navigate('/signin');
    });
  }, []);

  return (
    <div className={twMerge('text-center', className)} {...props}>
      Redirecting...
    </div>
  );
};

export { SignOutForm };
