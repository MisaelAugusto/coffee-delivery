import { type HTMLAttributes } from 'react';

import { Container, StyledInput, OptionalLabel } from './styles';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  optional?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ name, optional = false, style, ...props }) => {
  const { register } = useFormContext();

  return (
    <Container optional={optional} style={style}>
      <StyledInput type="text" {...props} {...register(name)} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </Container>
  );
};

export default TextField;
