import styled from 'styled-components';

import { Button } from 'components';

interface ContentContainerProps {
  error?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 0 16rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  position: relative;

  ${(props) => ({
    backgroundColor: props.theme.base.card,
    ...(props.error && { border: `1px solid ${props.theme.base.error}` })
  })}
`;

export const SectionTitle = styled.p`
  margin-bottom: 1rem;
  ${(props) => props.theme.typography.baloo2.XS};
`;

export const ContentHeader = styled.div<{ color: 'purple' | 'yellow' }>`
  display: flex;
  gap: 0.5rem;

  & > svg {
    color: ${(props) => props.theme[props.color].dark};
  }
`;

export const ContentHeaderContent = styled.div`
  p {
    ${(props) => ({
      ...props.theme.typography.roboto.M,
      color: props.theme.base.subtitle
    })}
  }

  span {
    ${(props) => ({
      ...props.theme.typography.roboto.S,
      color: props.theme.base.text
    })}
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HelperText = styled.p`
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.error
  })}
`;

export const NoCoffesMessage = styled.div`
  text-align: center;

  p {
    ${(props) => ({
      ...props.theme.typography.roboto.M,
      color: props.theme.base.label
    })}

    a {
      text-decoration: none;
      color: ${(props) => props.theme.base.subtitle};
    }
  }
`;

export const CoffeeItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 1.25rem;

  ${(props) => ({
    ...props.theme.typography.roboto.M,
    color: props.theme.base.subtitle
  })}
`;

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoffeePrice = styled.p`
  width: max-content;

  ${(props) => ({
    ...props.theme.typography.roboto.M,
    color: props.theme.base.text,
    fontWeight: 700
  })}
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.35rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.base.button};
`;

export const QuantityButton = styled.button`
  border: 0;
  background: none;
  color: ${(props) => props.theme.purple.main};
  position: relative;

  &:hover {
    & > div {
      display: block;

      &::after {
        display: block;
      }
    }
  }

  &:disabled {
    color: ${(props) => props.theme.base.text};
  }
`;

export const AddButtonTooltip = styled.div`
  position: absolute;
  display: none;
  right: 50%;
  transform: translateX(50%);
  bottom: 100%;
  margin-bottom: 1rem;
  width: max-content;
  max-width: 12rem;
  padding: 0.5rem;
  border-radius: 4px;

  ${(props) => ({
    ...props.theme.typography.roboto.XS,
    color: props.theme.base.label,
    backgroundColor: props.theme.base.background
  })}

  &::after {
    content: '';
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    top: 100%;

    border-radius: 4px;
    border: 8px solid ${(props) => props.theme.base.background};
    border-color: ${(props) => props.theme.base.background} transparent transparent transparent;

    display: none;
  }
`;

export const QuantityText = styled.p`
  ${(props) => ({
    ...props.theme.typography.roboto.M,
    color: props.theme.base.title
  })}
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.base.button};
`;

export const TotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  min-width: 24rem;
`;

export const ItemsDeliveryPrices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.text,
    '& > span': {
      ...props.theme.typography.roboto.M
    }
  })}
`;

export const TotalPrice = styled(ItemsDeliveryPrices)`
  ${(props) => ({
    ...props.theme.typography.roboto.L,
    color: props.theme.base.subtitle,
    fontWeight: 700
  })}
`;

export const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => ({
    ...props.theme.typography.roboto.buttonG,
    color: props.theme.white,
    backgroundColor: props.theme.yellow.main,
    '&:not(:disabled):hover': {
      backgroundColor: props.theme.yellow.main,
      border: `1px solid ${props.theme.yellow.main}`,
      transform: 'scale(1.01)'
    },
    '&:disabled': {
      backgroundColor: props.theme.base.button,
      border: 0
    }
  })}
`;
