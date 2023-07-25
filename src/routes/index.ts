import { lazy } from 'react';

const Home = lazy(async () => await import('screens/Home'));
const Checkout = lazy(async () => await import('screens/Checkout'));
const Order = lazy(async () => await import('screens/Order'));

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
  },
  {
    path: '/order',
    element: Order
  }
];

const useRoutes = () => {
  return { routes };
};

export default useRoutes;
