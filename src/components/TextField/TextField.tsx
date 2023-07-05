import { type HTMLAttributes } from 'react';

import { Container, StyledInput, OptionalLabel } from './styles';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  optional?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ optional = false, ...props }) => {
  return (
    <Container optional={optional}>
      <StyledInput type="text" {...props} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </Container>
  );
};

export default TextField;
