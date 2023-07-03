import { type HTMLAttributes } from 'react';

import { StyledInput } from './styles';

const TextField: React.FC<HTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledInput type="text" {...props} />;
};

export default TextField;
