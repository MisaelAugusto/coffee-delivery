import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 3.75rem;
  padding: 0.75rem;
  border-radius: 4px;
  border: 0;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.label,
    backgroundColor: props.theme.base.input
  })}

  &:focus {
    border: ${(props) => `1px solid ${props.theme.yellow.main}`};
  }
`;
