import { useMemo } from 'react';

import DeliveryManImage from 'assets/delivery-man.png';

import { Icon } from 'components';

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

const Order: React.FC = () => {
  const address = useMemo(() => 'Endereço', []);

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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </AddressText>
          </AddressItem>

          <AddressItem>
            <Timer>
              <Icon name="Timer" size={22} weight="fill" />
            </Timer>

            <AddressText>
              <p>Previsão de entrega</p>
              <strong>20min - 30min</strong>
            </AddressText>
          </AddressItem>

          <AddressItem>
            <Money>
              <Icon name="CurrencyDollar" size={22} />
            </Money>

            <AddressText>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </AddressText>
          </AddressItem>
        </AddressInfo>

        <img src={DeliveryManImage} alt="Ilustração de entregador" />
      </Section>
    </Container>
  );
};

export default Order;
