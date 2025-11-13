import { NavLink } from 'react-router';
import { UIMenu, type UIMenuProps } from '@webx/ui';
import './index.css';

const Sidebar = () => {
  const props: UIMenuProps = {
    items: [
      { to: () => <NavLink to="/">Dashboard</NavLink> },
      { to: () => <NavLink to="/compaings">Compaings</NavLink> },
      {
        to: () => `Reports`,
        items: [
          {
            items: [
              {
                to: () => (
                  <NavLink to="/report/compain-profit">Compain Profit</NavLink>
                ),
              },
              {
                to: () => (
                  <NavLink to="/report/country-profit">Country Profit</NavLink>
                ),
              },
              {
                to: () => (
                  <NavLink to="/report/date-profit">Date Profit</NavLink>
                ),
              },
            ],
          },
        ],
      },
      {
        to: () => `Settings`,
        items: [
          {
            items: [
              {
                to: () => (
                  <NavLink to="/settings/profile">User Settings</NavLink>
                ),
                items: [
                  {
                    items: [
                      {
                        to: () => (
                          <NavLink to="/settings/profile">Profile</NavLink>
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
        to: () => <NavLink to="/signout">Logout</NavLink>,
      },
    ],
  };

  return <UIMenu className="element-sidebar" {...props} />;
};

export { Sidebar };
