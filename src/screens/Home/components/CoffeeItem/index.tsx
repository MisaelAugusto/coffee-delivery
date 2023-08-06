import { Icon } from 'components';
import { formatNumber } from 'utils';

import {
  Container,
  CoffeeImage,
  Tags,
  Tag,
  Title,
  Description,
  Footer,
  PriceText,
  PriceValue,
  ButtonsContainer,
  QuantityContainer,
  QuantityButton,
  AddButtonTooltip,
  QuantityText,
  ShopButton,
  ShopButtonTooltip
} from './styles';

interface CoffeeItemProps extends Coffee {
  handleIncreaseCoffeeQuantity: (coffeeId: number, inCart?: boolean) => void;
  handleDecreaseCoffeeQuantity: (coffeeId: number, inCart?: boolean) => void;
  handleAddCoffeeToCart: (coffeeId: number, inCart?: boolean) => void;
}

const MAX_COFFEE_QUANTITY = 10;
const MIN_COFFEE_QUANTITY = 0;

const CoffeeItem: React.FC<CoffeeItemProps> = ({
  handleIncreaseCoffeeQuantity,
  handleDecreaseCoffeeQuantity,
  handleAddCoffeeToCart,
  ...coffee
}) => {
  const { id, image, tags, title, description, price, quantity, quantityInCart } = coffee;

  return (
    <Container>
      <CoffeeImage src={image} alt={title} />

      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <Title>{title}</Title>
      <Description>{description}</Description>

      <Footer>
        <PriceText>
          R$ <PriceValue>{formatNumber.currency(price)}</PriceValue>
        </PriceText>

        <ButtonsContainer>
          <QuantityContainer>
            <QuantityButton
              title="Diminuir quantidade"
              onClick={() => handleDecreaseCoffeeQuantity(id)}
              disabled={quantity === MIN_COFFEE_QUANTITY}
            >
              <Icon name="Minus" />
            </QuantityButton>

            <QuantityText>{quantity}</QuantityText>

            <QuantityButton
              title="Aumentar quantidade"
              onClick={() => handleIncreaseCoffeeQuantity(id)}
              disabled={quantity + quantityInCart === MAX_COFFEE_QUANTITY}
            >
              <Icon name="Plus" />

              {quantity + quantityInCart === MAX_COFFEE_QUANTITY && (
                <AddButtonTooltip>
                  <p>
                    {`Quantidade máxima atingida (${quantity} + ${quantityInCart} (no carrinho) = ${MAX_COFFEE_QUANTITY})`}
                  </p>
                </AddButtonTooltip>
              )}
            </QuantityButton>
          </QuantityContainer>

          <ShopButton
            title="Adicionar ao carrinho"
            onClick={() => handleAddCoffeeToCart(id)}
            disabled={quantity === 0}
          >
            <Icon name="ShoppingCart" size={22} weight="fill" color="white" />

            <ShopButtonTooltip>
              {quantity === 0 ? (
                <p>Selecione uma quantidade para adicionar ao carrinho</p>
              ) : (
                <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <p>Subtotal:</p>
                  <PriceText>
                    R$ <PriceValue>{formatNumber.currency(quantity * price)}</PriceValue>
                  </PriceText>
                </span>
              )}
            </ShopButtonTooltip>
          </ShopButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default CoffeeItem;
