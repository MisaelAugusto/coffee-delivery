import { Icon } from 'components';

interface CoffeeItemProps extends Coffee {
  quantity: number;
}

const CoffeeItem: React.FC<CoffeeItemProps> = ({ image, title, description, price, quantity }) => {
  return (
    <div>
      <img src={image} alt={title} />

      <p>{title}</p>
      <p>{description}</p>

      <div>
        <p>{price}</p>

        <div>
          <button>
            <Icon name="Minus" />
          </button>
          <p>{quantity}</p>
          <button>
            <Icon name="Plus" />
          </button>
        </div>

        <button>
          <Icon name="ShoppingCart" size={16} weight="fill" color="white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeItem;
