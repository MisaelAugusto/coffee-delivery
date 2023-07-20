import { type HTMLAttributes, useEffect, useMemo } from 'react';

import { Container, StyledInput, OptionalLabel, HelperText } from './styles';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  optional?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ name, optional = false, style, ...props }) => {
  const {
    clearErrors,
    formState: { errors },
    register,
    watch
  } = useFormContext();

  const formValue = watch(name);

  const errorMessage = useMemo(
    () => (name in errors ? String(errors[name]?.message) : ''),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors[name]]
  );

  useEffect(() => {
    console.log(formValue);
    if (formValue) clearErrors(name);
  }, [clearErrors, formValue, name]);

  return (
    <Container optional={optional} style={style} error={!!errorMessage}>
      <StyledInput type="text" {...props} {...register(name)} error={!!errorMessage} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
      {errorMessage && <HelperText>{errorMessage}</HelperText>}
    </Container>
  );
};

export default TextField;
