import styled from 'styled-components';

interface IconContainerProps {
  backgroundColor: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 45%;
`;

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.text
  })}
`;
