import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
  HelperText,
  NoCoffesMessage,
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
  SubmitButton
} from './styles';
import formatNumber from 'utils/formatNumber';
import {
  CREDIT_CARD_PAYMENT_METHOD_ID,
  DEBIT_CARD_PAYMENT_METHOD_ID,
  MONEY_PAYMENT_METHOD_ID
} from 'utils/helpers/global';

const schema = zod.object({
  cep: zod.string().nonempty('CEP é obrigatório'),
  rua: zod.string().nonempty('Rua é obrigatória'),
  numero: zod.string().nonempty('Número é obrigatório'),
  complemento: zod.string(),
  bairro: zod.string().nonempty('Bairro é obrigatório'),
  cidade: zod.string().nonempty('Cidade é obrigatória'),
  uf: zod.string().nonempty('UF é obrigatória'),
  payment_method_id: zod.number().nonnegative('Selecione a forma de pagamento')
});

type FormValues = zod.infer<typeof schema>;

const defaultValues: FormValues = {
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  payment_method_id: -1
};

const DELIVERY_TAX = 0.25;

const MIN_COFFEE_QUANTITY_IN_CART = 1;
const MAX_COFFEE_QUANTITY_IN_CART = 10;

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  const {
    coffees,
    address,
    handleIncreaseCoffeeQuantity,
    handleDecreaseCoffeeQuantity,
    handleRemoveCoffeeFromCart,
    updateAddress
  } = useCart();

  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<FormValues>({
    defaultValues: {
      ...defaultValues,
      ...address
    },
    resolver: zodResolver(schema)
  });
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    setValue,
    watch
  } = methods;

  const paymentMethodId = watch('payment_method_id');

  const paymentMethodError = useMemo(() => errors?.payment_method_id, [errors?.payment_method_id]);

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

  const mockedAPICall = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      navigate('/order');
    }, 2000);
  }, [navigate]);

  const submit = useCallback(
    (data: FormValues) => {
      updateAddress(data);

      mockedAPICall();
    },
    [mockedAPICall, updateAddress]
  );

  useEffect(() => {
    if (paymentMethodId > 0) clearErrors('payment_method_id');
  }, [clearErrors, paymentMethodId]);

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
            <form
              id="orderForm"
              onSubmit={handleSubmit(submit)}
              style={{ gap: '0.75rem', display: 'flex', flexWrap: 'wrap' }}
            >
              <TextField name="cep" placeholder="CEP" mask="cep" />

              <TextField name="rua" placeholder="Rua" style={{ width: '100%' }} />

              <div
                style={{ width: '100%', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
              >
                <TextField name="numero" placeholder="Número" mask="number" />
                <TextField
                  name="complemento"
                  placeholder="Complemento"
                  optional
                  style={{ flex: 1 }}
                />
              </div>

              <div
                style={{ width: '100%', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
              >
                <TextField name="bairro" placeholder="Bairro" style={{ width: '30%' }} />
                <TextField name="cidade" placeholder="Cidade" style={{ flex: 1 }} />
                <TextField name="uf" placeholder="UF" mask="uf" style={{ width: '20%' }} />
              </div>
            </form>
          </FormProvider>
        </ContentContainer>

        <ContentContainer error={!!paymentMethodError}>
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
              onClick={() => setValue('payment_method_id', CREDIT_CARD_PAYMENT_METHOD_ID)}
              selected={paymentMethodId === CREDIT_CARD_PAYMENT_METHOD_ID}
            >
              Cartão de crédito
            </Button>
            <Button
              iconName="Bank"
              onClick={() => setValue('payment_method_id', DEBIT_CARD_PAYMENT_METHOD_ID)}
              selected={paymentMethodId === DEBIT_CARD_PAYMENT_METHOD_ID}
            >
              Cartão de débito
            </Button>
            <Button
              iconName="Money"
              onClick={() => setValue('payment_method_id', MONEY_PAYMENT_METHOD_ID)}
              selected={paymentMethodId === MONEY_PAYMENT_METHOD_ID}
            >
              Dinheiro
            </Button>
          </ButtonsContainer>

          <HelperText>{paymentMethodError?.message}</HelperText>
        </ContentContainer>
      </Section>

      <Section>
        <SectionTitle>Cafés selecionados</SectionTitle>

        <ContentContainer style={{ borderRadius: '6px 44px 6px 44px' }}>
          {numberOfCoffeesInCart === 0 && (
            <NoCoffesMessage>
              <p>
                Adicione cafés ao carrinho a partir da <Link to="/">Home</Link>
              </p>
            </NoCoffesMessage>
          )}

          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
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
            </Fragment>
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

          <SubmitButton
            type="submit"
            form="orderForm"
            loading={isLoading}
            disabled={numberOfCoffeesInCart === 0}
          >
            Confirmar pedido
          </SubmitButton>
        </ContentContainer>
      </Section>
    </Container>
  );
};

export default Checkout;
