import styled from 'styled-components';

import backgroundImage from 'assets/background.png';

export const Introduction = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.875rem 10rem;
  gap: 3.5rem;
  background-image: url(${backgroundImage});
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

export const CoffeesItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;
