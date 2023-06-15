import { Icon } from 'components';

import logoImage from 'assets/logo.svg';

import { Header, HeaderContent, Place, Cart } from './styles';

const Home: React.FC = () => {
  return (
    <Header>
      <img src={logoImage} />

      <HeaderContent>
        <Place>
          <Icon name="MapPin" size={22} weight="fill" />
          <p>Campina Grande, PB</p>
        </Place>

        <Cart to="/test" content="0">
          <Icon name="ShoppingCart" size={28} weight="fill" />
        </Cart>
      </HeaderContent>
    </Header>
  );
};

export default Home;
