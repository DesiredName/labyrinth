import { PageTransition } from '../components/PageTransition';
import { WebsitesList } from '../features/websites/List';
import { WebsitesToolbar } from '../features/websites/Toolbar';

const Campaigns = () => (
  <PageTransition>
    <WebsitesToolbar />
    <WebsitesList />
  </PageTransition>
);

export { Campaigns };
