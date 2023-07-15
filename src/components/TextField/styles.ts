import styled from 'styled-components';

interface ContainerProps {
  optional: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 12.5rem;
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  width: 100%;
  border: 1px solid transparent;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.label,
    backgroundColor: props.theme.base.input
  })}

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.purple.main};
  }
`;

export const OptionalLabel = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.label,
    fontSize: '0.75rem',
    fontStyle: 'italic'
  })}
`;
