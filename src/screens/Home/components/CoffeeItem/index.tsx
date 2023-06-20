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
  QuantityText,
  ShopButton
} from './styles';

interface CoffeeItemProps extends Coffee {
  quantity: number;
}

const CoffeeItem: React.FC<CoffeeItemProps> = ({
  image,
  tags,
  title,
  description,
  price,
  quantity
}) => {
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
            <QuantityButton>
              <Icon name="Minus" />
            </QuantityButton>
            <QuantityText>{quantity}</QuantityText>
            <QuantityButton>
              <Icon name="Plus" />
            </QuantityButton>
          </QuantityContainer>

          <ShopButton>
            <Icon name="ShoppingCart" size={22} weight="fill" color="white" />
          </ShopButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default CoffeeItem;
