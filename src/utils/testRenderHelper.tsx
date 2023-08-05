import { useEffect, type PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CartProvider } from 'hooks/useCart/useCart';
import Application from 'components/App/Application';
import { GlobalStyles, theme } from 'styles';
import RouteProvider from 'components/RouteProvider';

interface Options {
  component?: React.FC;
  route?: string;
  state?: Record<string, unknown> | null;
}

const ContextHelper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Application>{children}</Application>
        </BrowserRouter>

        <GlobalStyles />
      </CartProvider>
    </ThemeProvider>
  );
};

const testRenderHelper = ({ component: Component, route, state = null }: Options) => {
  const RouteProviderComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
      if (route && route !== '/') navigate(route, { state });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <RouteProvider />;
  };

  return render(Component ? <Component /> : <RouteProviderComponent />, { wrapper: ContextHelper });
};

export { testRenderHelper as default };
