import { render } from '@testing-library/react';
import App from '../App';

describe('Component App', () => {
  it('should render component', () => {
    const { getByText } = render(<App />);

    expect(getByText('Coffee Delivery')).toBeInTheDocument();
  });
});
