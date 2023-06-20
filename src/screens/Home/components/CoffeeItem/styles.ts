import styled from 'styled-components';

export const Container = styled.div`
  width: 16rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 0 16px 0 16px;
  background-color: ${(props) => props.theme.base.card};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  padding: 0.35rem 0.5rem 0.25rem 0.5rem;
  border-radius: 9999px;
  text-align: center;
  ${(props) => ({
    backgroundColor: props.theme.yellow.light,
    color: props.theme.yellow.dark
  })}
`;

export const CoffeeImage = styled.img`
  margin-top: -1rem;
`;

export const Title = styled.p`
  ${(props) => ({
    ...props.theme.typography.baloo2.S,
    color: props.theme.base.subtitle
  })}
`;

export const Description = styled.p`
  text-align: center;
  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.label
  })}
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const PriceText = styled.p`
  display: flex;
  align-items: baseline;
  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.text
  })}
`;

export const PriceValue = styled.span`
  margin-left: 0.25rem;
  ${(props) => ({
    ...props.theme.typography.baloo2.M,
    color: props.theme.base.text
  })}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.base.button};
`;

export const QuantityButton = styled.button`
  border: 0;
  background: none;
  color: ${(props) => props.theme.purple.main};
`;

export const QuantityText = styled.p`
  ${(props) => ({
    ...props.theme.typography.roboto.M,
    color: props.theme.base.title
  })}
`;

export const ShopButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.purple.dark};
  display: flex;
  align-items: center;
  justify-content: center;
`;
