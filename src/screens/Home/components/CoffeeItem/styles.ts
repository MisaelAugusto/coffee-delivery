import styled from 'styled-components';

export const Container = styled.div`
  width: 16rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.base.card};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.base.input};

    img {
      transform: rotateZ(360deg);
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  padding: 0.35rem 0.5rem;
  border-radius: 9999px;
  text-align: center;
  ${(props) => ({
    backgroundColor: props.theme.yellow.light,
    color: props.theme.yellow.dark
  })}
`;

export const CoffeeImage = styled.img`
  margin-top: -1rem;
  transition: transform 1s;
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

export const ShopButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.purple.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme.purple.main};

    & > div {
      display: block;

      &::after {
        display: block;
      }
    }
  }

  &:disabled {
    color: ${(props) => props.theme.base.text};
    background-color: ${(props) => props.theme.purple.light};
  }
`;

export const ShopButtonTooltip = styled.div`
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
