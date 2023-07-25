import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 8rem;
  margin: 5rem auto 0;
  width: 80%;
`;

export const Header = styled.div`
  p {
    ${(props) => ({
      ...props.theme.typography.baloo2.L,
      color: props.theme.yellow.dark
    })}
  }

  span {
    ${(props) => ({
      ...props.theme.typography.roboto.L,
      color: props.theme.base.subtitle
    })}
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid #ff9000;
  border-radius: 6px 36px 6px 36px;
`;

export const AddressItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 9999px;
  color: ${(props) => props.theme.white};
`;

export const MapPin = styled(BaseIcon)`
  background-color: ${(props) => props.theme.purple.main};
`;

export const Timer = styled(BaseIcon)`
  background-color: ${(props) => props.theme.yellow.main};
`;

export const Money = styled(BaseIcon)`
  background-color: ${(props) => props.theme.yellow.dark};
`;

export const AddressText = styled.div`
  line-height: 1.5rem;
  color: ${(props) => props.theme.base.text};
`;
