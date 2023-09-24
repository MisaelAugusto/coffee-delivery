import { useEffect, type PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useCart, { CartProvider } from 'hooks/useCart/useCart';
import Application from 'components/App/Application';
import { GlobalStyles, theme } from 'styles';
import RouteProvider from 'components/RouteProvider';

interface Options {
  component?: React.ReactElement;
  route?: string;
  state?: Record<string, unknown> | null;
  coffees?: Coffee[];
  address?: Address;
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

const testRenderHelper = ({
  component: Component,
  coffees = [],
  address,
  route,
  state = null
}: Options) => {
  const RouteProviderComponent = () => {
    const navigate = useNavigate();
    const { updateCoffees, updateAddress } = useCart();

    useEffect(() => {
      if (route && route !== '/') navigate(route, { state });

      if (coffees.length > 0) updateCoffees(coffees);

      if (address) updateAddress(address);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <RouteProvider />;
  };

  const RenderComponent = Component ? () => Component : null;

  return render(RenderComponent ? <RenderComponent /> : <RouteProviderComponent />, {
    wrapper: ContextHelper
  });
};

export { testRenderHelper as default };
