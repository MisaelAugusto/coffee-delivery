import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles';
import RouteProvider from 'components/RouteProvider';
import { CartProvider } from 'hooks/useCart/useCart';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <RouteProvider />
        </BrowserRouter>

        <GlobalStyles />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
