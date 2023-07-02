import { render } from '@testing-library/react';
import App from '../App';

describe('Component App', () => {
  it('should render component', async () => {
    const { getByText, findByText } = render(<App />);

    expect(getByText('Campina Grande, PB')).toBeInTheDocument();

    await findByText('Expresso Tradicional');
  });
});
