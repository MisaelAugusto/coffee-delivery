import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles';
import RouteProvider from 'components/RouteProvider';
import { CartProvider } from 'hooks/useCart/useCart';

import Application from './Application';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Application>
            <RouteProvider />
          </Application>
        </BrowserRouter>

        <GlobalStyles />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
