import { lazy } from 'react';

const Home = lazy(async () => await import('screens/Home'));

interface Route {
  path: string;
  element: React.FC;
}

const routes: Route[] = [
  {
    path: '/',
    element: Home
  }
];

const useRoutes = () => {
  return { routes };
};

export default useRoutes;
