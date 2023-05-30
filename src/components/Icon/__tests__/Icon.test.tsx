import { render } from '@testing-library/react';

import Icon from '../Icon';

describe('Component Icon', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Icon name="Alarm" />);

    expect(getByTestId('icon-Alarm')).toBeInTheDocument();
  });
});
