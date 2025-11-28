import { NavLink, useNavigate, type NavigateFunction } from 'react-router';
import { UIMenu, type UIMenuProps } from './Menu';
import { IconDashboard } from '../Icons/dashboard';
import { IconCampaings } from '../Icons/campaings';
import { IconReports } from '../Icons/reports';
import { IconSettings } from '../Icons/settings';
import { IconLogout } from '../Icons/logout';
import { UIButton } from '@webx/ui';
import type { ReactNode } from 'react';

const buildProps = (navigate: NavigateFunction): UIMenuProps => {
  const buildTo = (to: string, child?: ReactNode) => (
    <UIButton variant="rounded" className="p-2" onClick={() => navigate(to)}>
      {child}
    </UIButton>
  );

  return {
    items: [
      {
        to: () => buildTo('/dashboard', <IconDashboard className="icon" />),
      },
      {
        to: () => buildTo('/campaigns', <IconCampaings className="icon" />),
      },
      {
        to: () =>
          buildTo('/report/campaign-profit', <IconReports className="icon" />),
        items: [
          {
            to: () => buildTo('/report/campaign-profit', <>Campaign Profit</>),
          },
          {
            to: () => buildTo('/report/country-profit', <>Country Profit</>),
          },
          {
            to: () => buildTo('/report/date-profit', <>Date Profit</>),
          },
        ],
      },
      {
        to: () =>
          buildTo('/settings/user-profile', <IconSettings className="icon" />),
        items: [
          {
            to: () => buildTo('/settings', <>Settings</>),
            items: [
              {
                to: () => buildTo('/settings/user-profile', <>User Profile</>),
              },
            ],
          },
        ],
      },
      {
        to: () => buildTo('/signout', <IconLogout className="icon" />),
      },
    ],
  };
};

const Sidebar = () => {
  const navigate = useNavigate();
  const props = buildProps(navigate);

  return (
    <div className="flex flex-col h-full justify-center">
      <div>
        <UIMenu className="element-sidebar" {...props} />
      </div>
    </div>
  );
};

export { Sidebar };
