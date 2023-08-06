import { render, fireEvent } from '@testing-library/react';

import MockedTextField from './MockedTextField';

describe('Component TextField', () => {
  it('should render component', async () => {
    const { getByPlaceholderText } = render(<MockedTextField name="teste" placeholder="Teste" />);

    expect(getByPlaceholderText('Teste')).toBeInTheDocument();

    const input = getByPlaceholderText('Teste');
    fireEvent.change(input, { target: { value: 'teste' } });

    expect(input).toHaveValue('teste');
  });

  it('should render component with opcional', async () => {
    const { getByText, getByPlaceholderText } = render(
      <MockedTextField name="teste" placeholder="Teste" optional />
    );

    expect(getByPlaceholderText('Teste')).toBeInTheDocument();

    expect(getByText('Opcional')).toBeInTheDocument();
  });

  it('should render component with error', async () => {
    const { getByText, getByPlaceholderText } = render(
      <MockedTextField name="teste" placeholder="Teste" error />
    );

    expect(getByPlaceholderText('Teste')).toBeInTheDocument();

    expect(getByText('Campo é obrigatório')).toBeInTheDocument();
  });

  it('should render component with mask', async () => {
    const { getByPlaceholderText } = render(
      <MockedTextField name="teste" placeholder="Teste" mask="cep" />
    );

    const input = getByPlaceholderText('Teste');
    fireEvent.change(input, { target: { value: 'teste' } });

    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: '12345678' } });

    expect(input).toHaveValue('12345-678');
  });
});
