import { NavLink } from 'react-router-dom';

export const LinkNavbar = ({ to, name }) => {
  return (
    <li className="flex">
      <NavLink
        to={to}
        className="py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-900 hover:bg-opacity-50 w-full rounded-lg active:scale-95 transition-transform text-slate-400"
      >
        {name}
      </NavLink>
    </li>
  );
};
