import { lazy } from 'react';

const Home = lazy(async () => await import('screens/Home'));
const Checkout = lazy(async () => await import('screens/Checkout'));

interface Route {
  path: string;
  element: React.FC;
}

const routes: Route[] = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/checkout',
    element: Checkout
  }
];

const useRoutes = () => {
  return { routes };
};

export default useRoutes;
