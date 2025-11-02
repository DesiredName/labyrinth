import { RestoreForm } from '../../features/auth/RestoreForm';
import { PageTransition } from '../../components/PageTransition';

const RestorePassword = () => (
  <PageTransition>
    <RestoreForm className="w-80" />
  </PageTransition>
);

export { RestorePassword };
