import { type HTMLAttributes } from 'react';
import type * as PhosphorIcons from '@phosphor-icons/react';

import Icon from '../Icon';
import { StyledButton } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'normal' | 'small';
  selected?: boolean;
  iconName?: keyof typeof PhosphorIcons;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  iconName,
  selected = false,
  size = 'normal',
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton selected={selected} size={size} {...props}>
      {iconName && <Icon name={iconName} size={16} />}
      {children}
    </StyledButton>
  );
};

export default Button;
