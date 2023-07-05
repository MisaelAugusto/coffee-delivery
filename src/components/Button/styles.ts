import styled from 'styled-components';

interface StyledButtonProps {
  selected: boolean;
  size: 'normal' | 'small';
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid transparent;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  flex: 1;
  text-transform: uppercase;

  ${(props) => ({
    ...props.theme.typography.roboto.S,
    color: props.theme.base.text,
    backgroundColor: props.theme.base.button,
    '& > svg': {
      color: props.theme.purple.main
    },
    '&:hover': {
      border: `1px solid ${props.theme.purple.main}`,
      backgroundColor: props.theme.purple.light
    },
    ...(props.selected && {
      border: `1px solid ${props.theme.purple.main}`,
      backgroundColor: props.theme.purple.light
    }),
    ...(props.size === 'small' && {
      padding: '0.5rem',
      '&:hover': {}
    })
  })}
`;
