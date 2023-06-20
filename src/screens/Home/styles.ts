import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backgroundImage from 'assets/background.png';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;

  &::after {
    // FIX THIS
    content: '3';
    display: flex;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    align-self: flex-start;
    margin-left: -1.375rem;
    margin-top: -0.5rem;

    ${(props) => ({
      backgroundColor: props.theme.yellow.dark,
      ...props.theme.typography.roboto.S,
      color: props.theme.white
    })}
  }
`;

export const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  ${(props) => ({
    backgroundColor: props.theme.purple.light,
    ...props.theme.typography.roboto.S,
    color: props.theme.purple.dark
  })}
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;

  ${(props) => ({
    backgroundColor: props.theme.yellow.light,
    color: props.theme.yellow.dark
  })}
`;

export const Introduction = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.875rem 10rem;
  gap: 3.5rem;
  background: ${backgroundImage} center;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38rem;
  min-width: 36rem;
`;

export const IntroductionTitle = styled.p`
  ${(props) => ({
    ...props.theme.typography.baloo2.XL,
    color: props.theme.base.title
  })}
`;

export const IntroductionSubtitle = styled.p`
  margin: 1rem 0 4.65rem 0;
  ${(props) => ({
    ...props.theme.typography.roboto.L,
    color: props.theme.base.subtitle
  })}
`;

export const IntroductionItems = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
  gap: 2.5rem;
`;

export const Coffees = styled.section`
  padding: 2rem 10rem;
`;

export const CoffeesTitle = styled.p`
  margin-bottom: 3.375rem;
  ${(props) => ({
    ...props.theme.typography.baloo2.L,
    color: props.theme.base.subtitle
  })}
`;
