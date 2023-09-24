import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

import Button from '../Button';

describe('Component Buttons', () => {
  it('should render component', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
      </ThemeProvider>
    );

    expect(getByText('Teste')).toBeInTheDocument();
  });
});
