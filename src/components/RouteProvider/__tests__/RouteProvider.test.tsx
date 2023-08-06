import { testRenderHelper } from 'utils';

import RouteProvider from '../RouteProvider';

describe('Component RouteProvider', () => {
  it('should render component', async () => {
    const { findByText } = testRenderHelper({ component: <RouteProvider /> });

    await findByText('Campina Grande, PB');

    await findByText('Expresso Tradicional');
  });
});
