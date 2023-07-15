import { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Icon, TextField, Button } from 'components';

import { useCart } from 'hooks';

import {
  Container,
  Section,
  SectionTitle,
  ContentContainer,
  ContentHeader,
  ContentHeaderContent,
  ButtonsContainer,
  CoffeeItem,
  CoffeeImage,
  CoffeeInfo,
  CoffeePrice,
  QuantityContainer,
  QuantityButton,
  QuantityText,
  AddButtonTooltip,
  Line,
  TotalsContainer,
  ItemsDeliveryPrices,
  TotalPrice,
  StyledButton
} from './styles';
import formatNumber from 'utils/formatNumber';

interface FormValues {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const defaultValues: FormValues = {
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: ''
};

const DELIVERY_TAX = 0.25;

const CREDIT_CARD_PAYMENT_METHOD_ID = 1;
const DEBIT_CARD_PAYMENT_METHOD_ID = 2;
const MONEY_PAYMENT_METHOD_ID = 3;

const MIN_COFFEE_QUANTITY_IN_CART = 1;
const MAX_COFFEE_QUANTITY_IN_CART = 10;

const Checkout: React.FC = () => {
  const {
    coffees,
    handleIncreaseCoffeeQuantity,
    handleDecreaseCoffeeQuantity,
    handleRemoveCoffeeFromCart
  } = useCart();

  const [paymentMethodId, setPaymentMethodId] = useState<number | null>(null);

  const methods = useForm({
    defaultValues
  });

  const coffeesInCart = useMemo(
    () => coffees.filter((coffee) => coffee.quantityInCart > 0),
    [coffees]
  );

  const numberOfCoffeesInCart = useMemo(
    () => coffeesInCart.reduce((result, coffee) => result + coffee.quantityInCart, 0),
    [coffeesInCart]
  );

  const totalPrice = useMemo(
    () =>
      coffeesInCart.reduce((result, coffee) => result + coffee.price * coffee.quantityInCart, 0),
    [coffeesInCart]
  );

  const submit = useCallback((values: FormValues) => {
    console.log(values);
  }, []);

  return (
    <Container>
      <Section>
        <SectionTitle>Complete seu pedido</SectionTitle>

        <ContentContainer>
          <ContentHeader color="yellow">
            <Icon name="MapPinLine" size={22} />

            <ContentHeaderContent>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </ContentHeaderContent>
          </ContentHeader>

          <FormProvider {...methods}>
            <form style={{ gap: '0.75rem', display: 'flex', flexWrap: 'wrap' }}>
              <TextField name="cep" placeholder="CEP" />

              <TextField name="rua" placeholder="Rua" style={{ width: '100%' }} />

              <div style={{ width: '100%', display: 'flex', gap: '0.75rem' }}>
                <TextField name="numero" placeholder="Número" />
                <TextField
                  name="complemento"
                  placeholder="Complemento"
                  optional
                  style={{ flex: 1 }}
                />
              </div>

              <TextField name="bairro" placeholder="Bairro" />
              <TextField name="cidade" placeholder="Cidade" style={{ flex: 1 }} />
              <TextField name="uf" placeholder="UF" style={{ width: '10%' }} />
            </form>
          </FormProvider>
        </ContentContainer>

        <ContentContainer>
          <ContentHeader color="purple">
            <Icon name="CurrencyDollar" size={22} />

            <ContentHeaderContent>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar:</span>
            </ContentHeaderContent>
          </ContentHeader>

          <ButtonsContainer>
            <Button
              iconName="CreditCard"
              onClick={() => setPaymentMethodId(CREDIT_CARD_PAYMENT_METHOD_ID)}
              selected={paymentMethodId === CREDIT_CARD_PAYMENT_METHOD_ID}
            >
              Cartão de crédito
            </Button>
            <Button
              iconName="Bank"
              onClick={() => setPaymentMethodId(DEBIT_CARD_PAYMENT_METHOD_ID)}
              selected={paymentMethodId === DEBIT_CARD_PAYMENT_METHOD_ID}
            >
              Cartão de débito
            </Button>
            <Button
              iconName="Money"
              onClick={() => setPaymentMethodId(MONEY_PAYMENT_METHOD_ID)}
              selected={paymentMethodId === MONEY_PAYMENT_METHOD_ID}
            >
              Dinheiro
            </Button>
          </ButtonsContainer>
        </ContentContainer>
      </Section>

      <Section>
        <SectionTitle>Cafés selecionados</SectionTitle>

        <ContentContainer style={{ borderRadius: '6px 44px 6px 44px' }}>
          {coffeesInCart.map((coffee) => (
            <>
              <CoffeeItem>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <CoffeeImage src={coffee.image} />

                  <CoffeeInfo>
                    <p>{coffee.title}</p>

                    <ButtonsContainer>
                      <QuantityContainer>
                        <QuantityButton
                          title="Diminuir quantidade"
                          onClick={() => handleDecreaseCoffeeQuantity(coffee.id, true)}
                          disabled={coffee.quantityInCart === MIN_COFFEE_QUANTITY_IN_CART}
                        >
                          <Icon name="Minus" />
                        </QuantityButton>

                        <QuantityText>{coffee.quantityInCart}</QuantityText>

                        <QuantityButton
                          title="Aumentar quantidade"
                          onClick={() => handleIncreaseCoffeeQuantity(coffee.id, true)}
                          disabled={coffee.quantityInCart === MAX_COFFEE_QUANTITY_IN_CART}
                        >
                          <Icon name="Plus" />

                          {coffee.quantityInCart === MAX_COFFEE_QUANTITY_IN_CART && (
                            <AddButtonTooltip>
                              <p>Quantidade máxima atingida</p>
                            </AddButtonTooltip>
                          )}
                        </QuantityButton>
                      </QuantityContainer>

                      <Button
                        iconName="Trash"
                        size="small"
                        onClick={() => handleRemoveCoffeeFromCart(coffee.id)}
                      >
                        Remover
                      </Button>
                    </ButtonsContainer>
                  </CoffeeInfo>
                </div>

                <CoffeePrice>R$ {formatNumber.currency(coffee.price)}</CoffeePrice>
              </CoffeeItem>
              <Line />
            </>
          ))}

          <TotalsContainer>
            <ItemsDeliveryPrices>
              <p>Total de itens</p>
              <span>R$ {formatNumber.currency(totalPrice)}</span>
            </ItemsDeliveryPrices>

            <ItemsDeliveryPrices>
              <p>Entrega</p>
              <span>R$ {formatNumber.currency(numberOfCoffeesInCart * DELIVERY_TAX)}</span>
            </ItemsDeliveryPrices>

            <TotalPrice>
              <p>Total</p>
              <p>R$ {formatNumber.currency(totalPrice + numberOfCoffeesInCart * DELIVERY_TAX)}</p>
            </TotalPrice>
          </TotalsContainer>

          <StyledButton type="submit">Confirmar pedido</StyledButton>
        </ContentContainer>
      </Section>
    </Container>
  );
};

export default Checkout;
