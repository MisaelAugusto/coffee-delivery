import { Fragment, useEffect, useState } from 'react';
import { Icon } from 'components';

import logoImage from 'assets/logo.svg';
import introductionCoffeImage from 'assets/introduction-coffee.png';

import {
  Header,
  HeaderContent,
  Place,
  Cart,
  Introduction,
  TextSection,
  IntroductionTitle,
  IntroductionSubtitle,
  IntroductionItems,
  Coffees,
  CoffeesTitle,
  CoffeesItems
} from './styles';

import IntroductionItem from './components/IntroductionItem';
import CoffeeItem from './components/CoffeeItem';
import { useTheme } from 'styled-components';
import useCoffees from 'store/coffees';

const Home: React.FC = () => {
  const theme = useTheme();
  const { coffees: coffeesList } = useCoffees();

  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => setCoffees(coffeesList), [coffeesList]);

  return (
    <Fragment>
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

      <Introduction>
        <TextSection>
          <IntroductionTitle>Encontre o café perfeito para qualquer hora do dia</IntroductionTitle>

          <IntroductionSubtitle>
            Com o Coffee Delivery você recebe o seu café onde estiver, a qualquer hora
          </IntroductionSubtitle>

          <IntroductionItems>
            <IntroductionItem
              iconName="ShoppingCart"
              backgroundColor={theme.yellow.dark}
              text="Compra simples e segura"
            />

            <IntroductionItem
              iconName="Package"
              backgroundColor={theme.base.text}
              text="Embalagem mantém o café intacto"
            />

            <IntroductionItem
              iconName="Timer"
              backgroundColor={theme.yellow.main}
              text="Entrega rápida e rastreada"
            />

            <IntroductionItem
              iconName="Coffee"
              backgroundColor={theme.purple.main}
              text="O café chega fresquinho até você"
            />
          </IntroductionItems>
        </TextSection>

        <img src={introductionCoffeImage} />
      </Introduction>

      <Coffees>
        <CoffeesTitle>Nossos cafés</CoffeesTitle>

        <CoffeesItems>
          {coffees.map((coffee) => (
            <CoffeeItem key={coffee.title} {...coffee} />
          ))}
        </CoffeesItems>
      </Coffees>
    </Fragment>
  );
};

export default Home;
