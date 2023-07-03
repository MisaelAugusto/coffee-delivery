import { useCallback } from 'react';
import { type FieldValues, FormProvider, useForm } from 'react-hook-form';

import { Icon, TextField } from 'components';

import sampleCoffee from 'assets/coffees/american.svg';

import {
  Container,
  OrderSection,
  SectionTitle,
  FormContainer,
  FormHeader,
  FormHeaderContent
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

const Checkout: React.FC = () => {
  const methods = useForm({
    defaultValues
  });
  const { register } = methods;

  const submit = useCallback((values: FormValues) => {
    console.log(values);
  }, []);

  return (
    <Container>
      <OrderSection>
        <SectionTitle>Complete seu pedido</SectionTitle>

        <FormContainer>
          <FormHeader>
            <Icon name="MapPinLine" />

            <FormHeaderContent>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </FormHeaderContent>
          </FormHeader>

          <FormProvider {...methods}>
            <form style={{ gap: '1rem', display: 'flex', flexWrap: 'wrap' }}>
              <TextField placeholder="CEP" {...register('cep')} style={{ width: '40%' }} />
              <TextField placeholder="Rua" {...register('rua')} style={{ width: '100%' }} />
              <TextField placeholder="Número" {...register('numero')} style={{ width: '40%' }} />
              <TextField
                placeholder="Complemento"
                {...register('complemento')}
                style={{ width: '60%' }}
              />
              <TextField placeholder="Bairro" {...register('bairro')} style={{ width: '40%' }} />
              <TextField placeholder="Cidade" {...register('cidade')} style={{ width: '50%' }} />
              <TextField placeholder="UF" {...register('uf')} style={{ width: '10%' }} />
            </form>
          </FormProvider>
        </FormContainer>

        <div>
          <div>
            <Icon name="CurrencyDollar" />
            <div>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar:</p>
            </div>
          </div>

          <button>
            <Icon name="CreditCard" />
            Cartão de crédito
          </button>

          <button>
            <Icon name="Bank" />
            Cartão de débito
          </button>
          <button>
            <Icon name="Money" />
            Dinheiro
          </button>
        </div>
      </OrderSection>

      <section>
        <p>Cafés selecionados</p>

        <div>
          <div>
            <img src={sampleCoffee} />

            <div>
              <p>Expresso Tradicional</p>

              {/* SAME QUANTITY BUTTON FROM HOME SCREEN */}

              <button>
                <Icon name="Trash" />
                Remover
              </button>
            </div>

            <p>R$ 19,80</p>
          </div>

          <div>
            <div>
              <p>Total de itens</p>
              <p>R$ 19,80</p>
            </div>

            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>

            <div>
              <p>Total</p>
              <p>R$ 23,30</p>
            </div>
          </div>

          <button>Confirmar pedido</button>
        </div>
      </section>
    </Container>
  );
};

export default Checkout;
