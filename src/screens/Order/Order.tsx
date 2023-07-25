import { useMemo } from 'react';

import DeliveryManImage from 'assets/delivery-man.png';

import { Icon } from 'components';
import { useCart } from 'hooks';

import {
  Container,
  Header,
  Section,
  AddressInfo,
  AddressItem,
  MapPin,
  Timer,
  Money,
  AddressText
} from './styles';
import { PAYMENT_METHODS } from 'utils/helpers/global';

const TIME_TO_PRODUCE_ONE_COFFEE_IN_MINUTES = 2;
const EXTRA_TIME_IN_MINUTES = 20;

const Order: React.FC = () => {
  const { coffees, address } = useCart();

  const {
    rua: addressLine1,
    numero: number,
    bairro: addressLine2,
    cidade: city,
    uf,
    payment_method_id: paymentMethodId
  } = address;

  const [minTime, maxTime] = useMemo(() => {
    const coffeesQuantity = coffees.reduce((result, coffee) => result + coffee.quantityInCart, 0);

    const time = coffeesQuantity * TIME_TO_PRODUCE_ONE_COFFEE_IN_MINUTES;

    return [time, time + EXTRA_TIME_IN_MINUTES];
  }, [coffees]);

  const paymentMethod = useMemo(
    () => PAYMENT_METHODS[paymentMethodId as PaymentMethodId],
    [paymentMethodId]
  );

  return (
    <Container>
      <Header>
        <p>Uhu! Pedido confirmado</p>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Header>

      <Section>
        <AddressInfo>
          <AddressItem>
            <MapPin>
              <Icon name="MapPin" size={22} weight="fill" />
            </MapPin>

            <AddressText>
              <p>
                Entrega em{' '}
                <strong>
                  Rua {addressLine1}, {number}
                </strong>
              </p>
              <span>
                {addressLine2} - {city}, {uf}
              </span>
            </AddressText>
          </AddressItem>

          <AddressItem>
            <Timer>
              <Icon name="Timer" size={22} weight="fill" />
            </Timer>

            <AddressText>
              <p>Previsão de entrega</p>
              <strong>
                {minTime}min - {maxTime}min
              </strong>
            </AddressText>
          </AddressItem>

          <AddressItem>
            <Money>
              <Icon name="CurrencyDollar" size={22} />
            </Money>

            <AddressText>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod}</strong>
            </AddressText>
          </AddressItem>
        </AddressInfo>

        <img src={DeliveryManImage} alt="Ilustração de entregador" />
      </Section>
    </Container>
  );
};

export default Order;
