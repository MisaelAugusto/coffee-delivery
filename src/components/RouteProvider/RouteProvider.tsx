import { Routes, Route } from 'react-router-dom';

import useRoutes from 'routes';

const RouteProvider: React.FC = () => {
  const { routes } = useRoutes();

  return (
    <Routes>
      {routes.map(({ path, element }) => {
        const Element = element;

        return <Route key={path} path={path} element={<Element />} />;
      })}

      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default RouteProvider;
