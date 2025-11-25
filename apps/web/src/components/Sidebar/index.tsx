import { NavLink } from 'react-router';
import { UIMenu, type UIMenuProps } from './Menu';
import { IconDashboard } from '../Icons/dashboard';
import { IconCampaings } from '../Icons/campaings';
import { IconReports } from '../Icons/reports';
import { IconSettings } from '../Icons/settings';
import { IconLogout } from '../Icons/logout';

const props: UIMenuProps = {
  id: '0',
  items: [
    {
      id: '1',
      to: () => (
        <NavLink to="/dashboard">
          <IconDashboard className="icon" />
        </NavLink>
      ),
    },
    {
      id: '2',
      to: () => (
        <NavLink to="/compaings">
          <IconCampaings className="icon" />
        </NavLink>
      ),
    },
    {
      id: '3',
      to: () => (
        <NavLink to="/report/compain-profit">
          <IconReports className="icon" />
        </NavLink>
      ),
      items: [
        {
          id: '4',
          items: [
            {
              id: '5',
              to: () => (
                <NavLink to="/report/compain-profit">Compain Profit</NavLink>
              ),
            },
            {
              id: '6',
              to: () => (
                <NavLink to="/report/country-profit">Country Profit</NavLink>
              ),
            },
            {
              id: '7',
              to: () => <NavLink to="/report/date-profit">Date Profit</NavLink>,
            },
          ],
        },
      ],
    },
    {
      id: '8',
      to: () => (
        <NavLink to="/settings/user-profile">
          <IconSettings className="icon" />
        </NavLink>
      ),
      items: [
        {
          id: '9',
          items: [
            {
              id: '10',
              to: () => <NavLink to="/settings">Settings</NavLink>,
              items: [
                {
                  id: '11',
                  items: [
                    {
                      id: '12',
                      to: () => (
                        <NavLink to="/settings/user-profile">
                          User Profile
                        </NavLink>
                      ),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '13',
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
