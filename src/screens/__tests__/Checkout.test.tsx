import { fireEvent } from '@testing-library/react';

import { testRenderHelper } from 'utils';

import useMockedCoffees from './mockedCoffees';

describe('Screen Checkout', () => {
  const mockedCoffees = useMockedCoffees();

  it('should render screen without coffees', async () => {
    const { findByText, getByText } = testRenderHelper({ route: '/checkout' });

    await findByText('Campina Grande, PB');

    await findByText('Complete seu pedido');

    expect(getByText('Adicione cafés ao carrinho a partir da')).toBeInTheDocument();

    expect(getByText('Home')).toBeInTheDocument();

    const confirmOrderButton = getByText('Confirmar pedido');
    expect(confirmOrderButton).toBeDisabled();
  });

  it('should show cart total values', async () => {
    const { findByText, getByText } = testRenderHelper({
      route: '/checkout',
      coffees: mockedCoffees
    });

    await findByText('Campina Grande, PB');

    await findByText('Complete seu pedido');

    expect(getByText('Expresso Tradicional')).toBeInTheDocument();

    expect(getByText('Total de itens')).toBeInTheDocument();
    expect(getByText('R$ 99,00')).toBeInTheDocument();

    expect(getByText('Entrega')).toBeInTheDocument();
    expect(getByText('R$ 5,00')).toBeInTheDocument();

    expect(getByText('Total')).toBeInTheDocument();
    expect(getByText('R$ 104,00')).toBeInTheDocument();
  });

  it('should decrease coffees quantity from cart', async () => {
    const { findByText, getByText, getByTitle } = testRenderHelper({
      route: '/checkout',
      coffees: mockedCoffees
    });

    await findByText('Campina Grande, PB');

    await findByText('Complete seu pedido');

    expect(getByText('Expresso Tradicional')).toBeInTheDocument();

    expect(getByText('10')).toBeInTheDocument();

    const decreaseCoffeeQuantityFromCartButton = getByTitle('Diminuir quantidade');
    fireEvent.click(decreaseCoffeeQuantityFromCartButton);

    expect(getByText('9')).toBeInTheDocument();
  });

  it('should remove coffees from cart', async () => {
    const { findByText, getByText, queryByText } = testRenderHelper({
      route: '/checkout',
      coffees: mockedCoffees
    });

    await findByText('Campina Grande, PB');

    await findByText('Complete seu pedido');

    expect(getByText('Expresso Tradicional')).toBeInTheDocument();

    const removeCoffeeFromCartButton = getByText('Remover');
    fireEvent.click(removeCoffeeFromCartButton);

    expect(queryByText('Expresso Tradicional')).not.toBeInTheDocument();

    expect(getByText('Adicione cafés ao carrinho a partir da')).toBeInTheDocument();

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should show form errors', async () => {
    const { findByText, getByText } = testRenderHelper({
      route: '/checkout',
      coffees: mockedCoffees
    });

    await findByText('Campina Grande, PB');

    await findByText('Complete seu pedido');

    expect(getByText('Expresso Tradicional')).toBeInTheDocument();

    const confirmOrderButton = getByText('Confirmar pedido');
    expect(confirmOrderButton).toBeEnabled();

    fireEvent.click(confirmOrderButton);

    await findByText('CEP é obrigatório');

    const formErrors = [
      'Rua é obrigatória',
      'Número é obrigatório',
      'Bairro é obrigatório',
      'Cidade é obrigatória',
      'UF é obrigatória',
      'Selecione a forma de pagamento'
    ];

    formErrors.forEach((formError) => {
      expect(getByText(formError)).toBeInTheDocument();
    });
  });

  it('should finish order', async () => {
    const { findByText, getByPlaceholderText, getByText } = testRenderHelper({
      route: '/checkout',
      coffees: mockedCoffees
    });

    await findByText('Campina Grande, PB');

    await findByText('Complete seu pedido');

    expect(getByText('Expresso Tradicional')).toBeInTheDocument();

    const cepInput = getByPlaceholderText('CEP');
    fireEvent.change(cepInput, { target: { value: '12345678' } });
    expect(cepInput).toHaveValue('12345-678');

    const addressInput = getByPlaceholderText('Rua');
    fireEvent.change(addressInput, { target: { value: 'Rua teste' } });
    expect(addressInput).toHaveValue('Rua teste');

    const addressNumberInput = getByPlaceholderText('Número');
    fireEvent.change(addressNumberInput, { target: { value: '123' } });
    expect(addressNumberInput).toHaveValue('123');

    const addressLine2Input = getByPlaceholderText('Bairro');
    fireEvent.change(addressLine2Input, { target: { value: 'Bairro teste' } });
    expect(addressLine2Input).toHaveValue('Bairro teste');

    const complementInput = getByPlaceholderText('Complemento');
    fireEvent.change(complementInput, { target: { value: 'Próxima ao estabelecimento teste' } });
    expect(complementInput).toHaveValue('Próxima ao estabelecimento teste');

    const cityInput = getByPlaceholderText('Cidade');
    fireEvent.change(cityInput, { target: { value: 'Cidade teste' } });
    expect(cityInput).toHaveValue('Cidade teste');

    const ufInput = getByPlaceholderText('UF');
    fireEvent.change(ufInput, { target: { value: 'PB' } });
    expect(ufInput).toHaveValue('PB');

    const creditCardPaymentMethodButton = getByText('Cartão de crédito');
    fireEvent.click(creditCardPaymentMethodButton);

    const confirmOrderButton = getByText('Confirmar pedido');
    expect(confirmOrderButton).toBeEnabled();
    fireEvent.click(confirmOrderButton);

    await findByText('Carregando...');
  });
});
