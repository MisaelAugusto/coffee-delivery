import { fireEvent } from '@testing-library/react';
import useMockedCoffees from 'screens/__tests__/mockedCoffees';

import { testRenderHelper } from 'utils';

describe('Screen Order', () => {
  const mockedCoffees = useMockedCoffees();
  const mockedAddress = {
    cep: '12345-678',
    rua: 'teste',
    numero: '123',
    complemento: '',
    cidade: 'Cidade teste',
    bairro: 'Bairro teste',
    payment_method_id: 1,
    uf: 'TE'
  };

  it('should render screen', async () => {
    const { findByText, getByText } = testRenderHelper({
      route: '/order',
      coffees: mockedCoffees,
      address: mockedAddress
    });

    await findByText('Campina Grande, PB');

    await findByText('Uhu! Pedido confirmado');

    expect(getByText('Entrega em')).toBeInTheDocument();
    expect(getByText('Rua teste, 123')).toBeInTheDocument();

    expect(getByText('20min - 40min')).toBeInTheDocument();

    expect(getByText('Cartão de crédito')).toBeInTheDocument();
  });

  it('should render screen', async () => {
    const { findByText, getByText } = testRenderHelper({
      route: '/order',
      coffees: mockedCoffees,
      address: mockedAddress
    });

    await findByText('Campina Grande, PB');

    await findByText('Uhu! Pedido confirmado');

    const backButton = getByText('Voltar');
    fireEvent.click(backButton);

    await findByText('Nossos cafés');
  });
});
