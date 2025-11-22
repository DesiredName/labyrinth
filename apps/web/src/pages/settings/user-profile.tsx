import { PageTransition } from '../../components/PageTransition';
import { useAuth } from '../../provider/Auth';

const UserProfile = () => {
  const { user, isLoading } = useAuth();

  return isLoading || user == null ? (
    <div>n/a</div>
  ) : (
    <PageTransition>
      <div>{user.email}</div>
    </PageTransition>
  );
};

export { UserProfile };
