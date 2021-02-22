import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
`;
