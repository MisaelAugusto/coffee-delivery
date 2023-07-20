import { type HTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react';

import { Container, StyledInput, OptionalLabel, HelperText } from './styles';
import { useFormContext } from 'react-hook-form';

import { mask as maskUtil } from 'utils';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  optional?: boolean;
  mask?: 'cep' | 'number' | 'uf';
}

const TextField: React.FC<TextFieldProps> = ({ mask, name, optional = false, style, ...props }) => {
  const {
    clearErrors,
    formState: { errors },
    register,
    setValue,
    watch
  } = useFormContext();

  const formValue = watch(name);

  const maskFunction = mask ? maskUtil[mask] : null;

  const [formattedValue, setFormattedValue] = useState(
    maskFunction ? maskFunction(formValue) : formValue
  );

  const errorMessage = useMemo(
    () => (name in errors ? String(errors[name]?.message) : ''),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors[name]]
  );

  const handleChange = useCallback(
    (event: TextFieldOnChangeEvent) => {
      const newValue = event.target.value;

      const maskedValue = maskFunction ? maskFunction(newValue) : newValue;

      clearErrors(name);
      setValue(name, maskedValue);
      setFormattedValue(maskedValue);
    },
    [clearErrors, maskFunction, setValue, name]
  );

  useEffect(() => {
    if (maskFunction) {
      const formattedCurrentValue = maskFunction(formValue);

      if (formattedCurrentValue !== formattedValue) {
        clearErrors(name);
        setFormattedValue(formattedCurrentValue);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearErrors, maskFunction, formValue, name]);

  return (
    <Container optional={optional} style={style} error={!!errorMessage}>
      <StyledInput
        type="text"
        {...props}
        {...register(name)}
        error={!!errorMessage}
        value={formattedValue}
        onChange={(event: TextFieldOnChangeEvent) => handleChange(event)}
      />

      {optional && <OptionalLabel>Opcional</OptionalLabel>}

      {errorMessage && <HelperText>{errorMessage}</HelperText>}
    </Container>
  );
};

export default TextField;
