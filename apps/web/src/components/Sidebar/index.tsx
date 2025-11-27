import { NavLink } from 'react-router';
import { UIMenu, type UIMenuProps } from './Menu';
import { IconDashboard } from '../Icons/dashboard';
import { IconCampaings } from '../Icons/campaings';
import { IconReports } from '../Icons/reports';
import { IconSettings } from '../Icons/settings';
import { IconLogout } from '../Icons/logout';

const props: UIMenuProps = {
  items: [
    {
      to: () => (
        <NavLink to="/dashboard">
          <IconDashboard className="icon" />
        </NavLink>
      ),
    },
    {
      to: () => (
        <NavLink to="/campaigns">
          <IconCampaings className="icon" />
        </NavLink>
      ),
    },
    {
      to: () => (
        <NavLink to="/report/campaign-profit">
          <IconReports className="icon" />
        </NavLink>
      ),
      items: [
        {
          to: () => (
            <NavLink to="/report/campaign-profit">Campaign Profit</NavLink>
          ),
        },
        {
          to: () => (
            <NavLink to="/report/country-profit">Country Profit</NavLink>
          ),
        },
        {
          to: () => <NavLink to="/report/date-profit">Date Profit</NavLink>,
        },
      ],
    },
    {
      to: () => (
        <NavLink to="/settings/user-profile">
          <IconSettings className="icon" />
        </NavLink>
      ),
      items: [
        {
          to: () => <NavLink to="/settings">Settings</NavLink>,
          items: [
            {
              to: () => (
                <NavLink to="/settings/user-profile">User Profile</NavLink>
              ),
            },
          ],
        },
      ],
    },
    {
      to: () => (
        <NavLink to="/signout">
          <IconLogout className="icon" />
        </NavLink>
      ),
    },
  ],
};

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div>
        <UIMenu className="element-sidebar" {...props} />
      </div>
    </div>
  );
};

export { Sidebar };
