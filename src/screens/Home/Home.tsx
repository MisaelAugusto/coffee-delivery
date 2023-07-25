import { Fragment, useEffect } from 'react';
import { useTheme } from 'styled-components';

import introductionCoffeImage from 'assets/introduction-coffee.png';

import {
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
import { useCart } from 'hooks';

const Home: React.FC = () => {
  const theme = useTheme();

  const {
    coffees,
    handleIncreaseCoffeeQuantity,
    handleDecreaseCoffeeQuantity,
    handleAddCoffeeToCart,
    resetCoffeesQuantities,
    resetAddress
  } = useCart();

  useEffect(() => {
    resetAddress();
    resetCoffeesQuantities();
  }, [resetAddress, resetCoffeesQuantities]);

  return (
    <Fragment>
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
            <CoffeeItem
              key={coffee.title}
              {...coffee}
              handleIncreaseCoffeeQuantity={handleIncreaseCoffeeQuantity}
              handleDecreaseCoffeeQuantity={handleDecreaseCoffeeQuantity}
              handleAddCoffeeToCart={handleAddCoffeeToCart}
            />
          ))}
        </CoffeesItems>
      </Coffees>
    </Fragment>
  );
};

export default Home;
