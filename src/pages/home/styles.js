import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 40px 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
