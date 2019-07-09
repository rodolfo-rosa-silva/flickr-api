import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BoxFilter = styled.div`
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 100%;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #ccc;
`;

export const Input = styled.input`
  border: none;
  margin-left: 15px;
  font-size: 20px;
  display: flex;
  flex: 1;

  @media (max-width: 320px) {
    max-width: 85%;
  }
`;

export const DescriptionSearch = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Term = styled.div`
  color: #fff;
  font-size: 12px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const Results = styled.div`
  color: #fff;
  font-size: 12px;
`;
