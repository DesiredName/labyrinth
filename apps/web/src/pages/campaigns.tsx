import { PageTransition } from '../components/PageTransition';
import { WebsitesList } from '../features/websites/List';

const Campaigns = () => (
  <PageTransition>
    <WebsitesList />
  </PageTransition>
);

export { Campaigns };
