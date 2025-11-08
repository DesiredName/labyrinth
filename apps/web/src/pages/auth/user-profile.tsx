import { PageTransition } from '../../components/PageTransition';
import { useAuthContext } from '../../context/AuthContext';

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
