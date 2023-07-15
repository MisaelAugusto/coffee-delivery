import { type HTMLAttributes } from 'react';

import { Container, StyledInput, OptionalLabel } from './styles';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  optional?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ optional = false, style, ...props }) => {
  return (
    <Container optional={optional} style={style}>
      <StyledInput type="text" {...props} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </Container>
  );
};

export default TextField;
