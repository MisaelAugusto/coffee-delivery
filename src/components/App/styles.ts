import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    content: attr(content);
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
