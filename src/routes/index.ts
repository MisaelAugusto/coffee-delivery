import { lazy } from 'react';

const Home = lazy(async () => await import('screens/Home'));
const Cart = lazy(async () => await import('screens/Cart'));

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
    path: '/cart',
    element: Cart
  }
];

const useRoutes = () => {
  return { routes };
};

export default useRoutes;
