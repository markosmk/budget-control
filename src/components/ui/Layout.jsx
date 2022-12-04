import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <div className="h-screen w-screen flex">
      <aside className="w-64 p-4 bg-slate-200">
        <Navbar />
      </aside>
      <main className="flex-1 p-4 bg-slate-100 ">
        <Outlet />
      </main>
    </div>
  );
};
