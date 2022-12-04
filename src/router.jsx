import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/ui/Layout';

import { Home } from './pages/Home';
import { History } from './pages/History';
import { Account } from './pages/Account';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'account', element: <Account /> },
      { path: 'history', element: <History /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
