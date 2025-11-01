import { NavLink } from 'react-router';

const Sidebar = () => (
  <aside className="sidebar">
    <menu>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/email-lists">EMail Lists</NavLink>
      </li>
      <li>
        Reports
        <ul>
          <li>
            <NavLink to="/report/compain-profit"> Compain Profit</NavLink>
          </li>
          <li>
            <NavLink to="/report/country-profit">Country Profit</NavLink>
          </li>
          <li>
            <NavLink to="/report/date-profit">Date Profit</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/signout">Logout</NavLink>
      </li>
    </menu>
  </aside>
);

export { Sidebar };
