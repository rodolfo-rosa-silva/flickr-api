import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
`;

export const ListImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    padding: 0 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ItemPhoto = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  background: #2f2835;

  @media (max-width: 1024px) {
    width: 310px;
  }
  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Thumb = styled.img`
  max-width: 100%;
  height: 150px;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const Author = styled.h3`
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const Tags = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ItemTag = styled.span`
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  padding: 5px 10px;
  background: #47424c;
  margin: 5px;
  cursor: pointer;
`;

export const ContainerViewMore = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonLoadingMore = styled.button`
  border: none;
  background: #47424c;
  color: #fff;
  border-radius: 5px;
  padding: 15px 35px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
`;
