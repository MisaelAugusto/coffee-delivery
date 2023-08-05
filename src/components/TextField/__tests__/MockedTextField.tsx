import { ThemeProvider } from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import theme from 'styles/theme';

import TextField from '..';
import { type TextFieldProps } from '../TextField';
import { useEffect } from 'react';

const MockedTextField: React.FC<TextFieldProps & { error?: boolean }> = ({ error, ...props }) => {
  const methods = useForm({
    defaultValues: {
      teste: ''
    }
  });
  const { setError } = methods;

  useEffect(() => {
    if (error) {
      setError('teste', { message: 'Campo é obrigatório' });
    }
  }, [error, setError]);

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <form>
          <TextField {...props} />
        </form>
      </FormProvider>
    </ThemeProvider>
  );
};

export default MockedTextField;
