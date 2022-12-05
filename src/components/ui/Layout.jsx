import { Outlet } from 'react-router-dom';
import { ThemeButton } from '../ThemeButton';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <div className="h-screen w-screen flex">
      <aside className="w-64 p-4 bg-slate-200 dark:bg-black">
        <Navbar />
      </aside>
      <main className="flex-1 p-4 bg-slate-100 dark:bg-slate-900">
        <ThemeButton />
        <Outlet />
      </main>
    </div>
  );
};
