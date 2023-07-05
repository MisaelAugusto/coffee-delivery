import { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Icon, TextField, Button } from 'components';

import sampleCoffee from 'assets/coffees/american.svg';

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

const CREDIT_CARD_PAYMENT_METHOD_ID = 1;
const DEBIT_CARD_PAYMENT_METHOD_ID = 2;
const MONEY_PAYMENT_METHOD_ID = 3;

const Checkout: React.FC = () => {
  const [paymentMethodId, setPaymentMethodId] = useState<number | null>(null);

  const methods = useForm({
    defaultValues
  });
  const { register } = methods;

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
              <TextField placeholder="CEP" {...register('cep')} />

              <TextField placeholder="Rua" {...register('rua')} style={{ width: '100%' }} />

              <div style={{ display: 'flex', gap: '0.75rem', width: '100%' }}>
                <TextField placeholder="Número" {...register('numero')} />
                <TextField
                  placeholder="Complemento"
                  {...register('complemento')}
                  optional
                  style={{ flex: 1 }}
                />
              </div>

              <TextField placeholder="Bairro" {...register('bairro')} />
              <TextField placeholder="Cidade" {...register('cidade')} style={{ width: '50%' }} />
              <TextField placeholder="UF" {...register('uf')} style={{ width: '10%' }} />
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
          {[1, 2].map(() => (
            <>
              <CoffeeItem>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <CoffeeImage src={sampleCoffee} />

                  <CoffeeInfo>
                    <p>Expresso Tradicional</p>

                    <ButtonsContainer>
                      <QuantityContainer>
                        <QuantityButton
                          title="Diminuir quantidade"
                          // onClick={() => handleDecreaseCoffeeQuantity(id)}
                          // disabled={quantity === MIN_COFFEE_QUANTITY}
                        >
                          <Icon name="Minus" />
                        </QuantityButton>

                        <QuantityText>{0}</QuantityText>

                        <QuantityButton
                          title="Aumentar quantidade"
                          // onClick={() => handleIncreaseCoffeeQuantity(id)}
                          // disabled={quantity + quantityInCart === MAX_COFFEE_QUANTITY}
                        >
                          <Icon name="Plus" />

                          {/* {quantity + quantityInCart === MAX_COFFEE_QUANTITY && (
                      <AddButtonTooltip>
                      <p>
                        {`Quantidade máxima atingida (${quantity} + ${quantityInCart} (no carrinho) = ${MAX_COFFEE_QUANTITY})`}
                      </p>
                    </AddButtonTooltip>
                  )} */}
                        </QuantityButton>
                      </QuantityContainer>

                      <Button iconName="Trash" size="small">
                        Remover
                      </Button>
                    </ButtonsContainer>
                  </CoffeeInfo>
                </div>

                <CoffeePrice>R$ 19,80</CoffeePrice>
              </CoffeeItem>
              <Line />
            </>
          ))}

          <TotalsContainer>
            <ItemsDeliveryPrices>
              <p>Total de itens</p>
              <span>R$ 19,80</span>
            </ItemsDeliveryPrices>

            <ItemsDeliveryPrices>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </ItemsDeliveryPrices>

            <TotalPrice>
              <p>Total</p>
              <p>R$ 23,30</p>
            </TotalPrice>
          </TotalsContainer>

          <StyledButton>Confirmar pedido</StyledButton>
        </ContentContainer>
      </Section>
    </Container>
  );
};

export default Checkout;
