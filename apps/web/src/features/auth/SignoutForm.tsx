import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../provider/Auth';
import { twMerge } from 'tailwind-merge';

type SignOutFormProps = React.ComponentPropsWithoutRef<'div'>;

const SignOutForm = ({ className, ...props }: SignOutFormProps) => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    signout().finally(() => {
      navigate('/login');
    });
  }, []);

  return (
    <div className={twMerge('text-center', className)} {...props}>
      Redirecting...
    </div>
  );
};

export { SignOutForm };
