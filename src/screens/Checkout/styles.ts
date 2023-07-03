import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.base.card};
`;

export const SectionTitle = styled.p`
  margin-bottom: 1rem;
  ${(props) => props.theme.typography.baloo2.XS};
`;

export const FormHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  & > svg {
    color: ${(props) => props.theme.yellow.dark};
  }
`;

export const FormHeaderContent = styled.div`
  p {
    ${(props) => ({
      ...props.theme.typography.roboto.M,
      color: props.theme.base.subtitle
    })}
  }

  span {
    ${(props) => ({
      ...props.theme.typography.roboto.S,
      color: props.theme.base.text
    })}
  }
`;
