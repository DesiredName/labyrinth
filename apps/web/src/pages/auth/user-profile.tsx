import { PageTransition } from '../../components/PageTransition';
import { useAuthContext } from '../../provider/AuthProvider';

const UserProfile = () => {
  const { user, isLoading } = useAuthContext();

  return isLoading || user == null ? (
    <div>n/a</div>
  ) : (
    <PageTransition>
      <div>{user.email}</div>
    </PageTransition>
  );
};

export { UserProfile };
