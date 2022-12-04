import { LinkNavbar } from './LinkNavbar';

const routesInSidebar = [
  { to: '/', name: 'Home' },
  { to: 'account', name: 'Account' },
  { to: 'history', name: 'History' },
  { to: 'settings', name: 'Settings' },
];

export const Navbar = () => {
  return (
    <ul className="flex flex-col gap-2">
      {routesInSidebar.map((item, index) => (
        <LinkNavbar {...item} key={index} />
      ))}
    </ul>
  );
};
