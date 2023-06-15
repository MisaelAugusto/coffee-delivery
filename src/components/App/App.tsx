import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles';
import RouteProvider from 'components/RouteProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RouteProvider />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
