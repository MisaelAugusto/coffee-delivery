import styled from 'styled-components';

interface ContainerProps {
  optional: boolean;
  error: boolean;
}

interface StyledInputProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 12.5rem;

  ${(props) => ({
    ...(props.error && { marginBottom: '0.75rem' })
  })}
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: 0.75rem;
  border-radius: 4px;
  width: 100%;
  border: 1px solid transparent;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.label,
    backgroundColor: props.theme.base.input,
    ...(props.error && { border: `1px solid ${props.theme.base.error}` })
  })}

  &:focus {
    outline: none;
    border: 1px solid ${(props) => (props.error ? props.theme.base.error : props.theme.purple.main)};
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

export const HelperText = styled.p`
  position: absolute;
  top: 100%;
  margin-top: 0.25rem;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.error,
    fontSize: '0.7rem'
  })}
`;
