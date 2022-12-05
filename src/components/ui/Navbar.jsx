import { LinkNavbar } from './LinkNavbar';

const routesInSidebar = [
  { to: '/', name: 'Inicio' },
  { to: 'account', name: 'Cuentas' },
  { to: 'history', name: 'Informes' },
  { to: 'settings', name: 'Opciones' },
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
