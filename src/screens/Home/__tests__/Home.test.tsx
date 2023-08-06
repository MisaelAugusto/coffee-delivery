import { fireEvent } from '@testing-library/react';

import { testRenderHelper } from 'utils';

describe('Screen Home', () => {
  it('should render screen', async () => {
    const { findByText, getByText } = testRenderHelper({ route: '/' });

    await findByText('Campina Grande, PB');

    await findByText('Expresso Tradicional');

    expect(getByText('Encontre o café perfeito para qualquer hora do dia')).toBeInTheDocument();
  });

  it('should add coffees to cart', async () => {
    const { findAllByText, findByText, getAllByTitle, getByTitle, getByText } = testRenderHelper({
      route: '/'
    });

    await findByText('Expresso Tradicional');

    const cartIcon = getByTitle('Carrinho')?.parentNode as Element;
    expect(cartIcon).toHaveAttribute('content', '0');

    const [addCoffeeToCartButtonEspresso] = getAllByTitle('Adicionar ao carrinho');
    expect(addCoffeeToCartButtonEspresso).toBeDisabled();

    fireEvent.mouseOver(addCoffeeToCartButtonEspresso);

    await findAllByText('Selecione uma quantidade para adicionar ao carrinho');

    const [addQuantityButtonEspresso] = getAllByTitle('Aumentar quantidade');
    for (let i = 0; i < 10; i++) {
      fireEvent.click(addQuantityButtonEspresso);
    }

    fireEvent.mouseOver(addQuantityButtonEspresso);

    await findAllByText('Quantidade máxima atingida (10 + 0 (no carrinho) = 10)');

    fireEvent.mouseOver(addCoffeeToCartButtonEspresso);

    await findByText('Subtotal:');

    expect(getByText('99,00')).toBeInTheDocument();

    expect(addQuantityButtonEspresso).toBeDisabled();

    expect(addCoffeeToCartButtonEspresso).toBeEnabled();

    fireEvent.click(addCoffeeToCartButtonEspresso);

    expect(cartIcon).toHaveAttribute('content', '1');
  });
});
