import { Fragment, type PropsWithChildren, useMemo } from 'react';

import { Icon } from 'components';
import useCart from 'hooks/useCart';
import logoImage from 'assets/logo.svg';

import { Header, HeaderContent, Place, Cart } from './styles';

const Application: React.FC<PropsWithChildren> = ({ children }) => {
  const { coffees } = useCart();

  const coffeesInCart = useMemo(
    () => coffees.filter((coffee) => coffee.quantityInCart > 0).length,
    [coffees]
  );

  return (
    <Fragment>
      <Header>
        <img src={logoImage} />

        <HeaderContent content={String(coffeesInCart)}>
          <Place>
            <Icon name="MapPin" size={22} weight="fill" />
            <p>Campina Grande, PB</p>
          </Place>

          <Cart to="/cart" content="1">
            <Icon name="ShoppingCart" size={28} weight="fill" />
          </Cart>
        </HeaderContent>
      </Header>

      {children}
    </Fragment>
  );
};

export default Application;
