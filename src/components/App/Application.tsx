import { Fragment, type PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';
import useCart from 'hooks/useCart';
import logoImage from 'assets/logo.svg';

import { Header, HeaderContent, Place, Cart } from './styles';

const Application: React.FC<PropsWithChildren> = ({ children }) => {
  const { coffees, address } = useCart();

  const coffeesInCart = useMemo(
    () => coffees.filter((coffee) => coffee.quantityInCart > 0).length,
    [coffees]
  );

  const hasAddress = useMemo(() => address.payment_method_id > 0, [address]);

  return (
    <Fragment>
      <Header>
        <Link to="/">
          <img src={logoImage} />
        </Link>

        <HeaderContent content={String(coffeesInCart)}>
          <Place>
            <Icon name="MapPin" size={22} weight="fill" />
            <p>Campina Grande, PB</p>
          </Place>

          <Cart title="Carrinho" to={hasAddress ? '#' : '/checkout'}>
            <Icon name="ShoppingCart" size={28} weight="fill" />
          </Cart>
        </HeaderContent>
      </Header>

      {children}
    </Fragment>
  );
};

export default Application;
