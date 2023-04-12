import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const BookName = styled.h1`
  color: ${({theme}) => theme.title};
  font-family: 'Libre Baskerville', serif;
`;

export const ContainerText = styled.div`
  flex-direction: column;
  padding: 30px 5px 30px 30px;
`;

export const Verses = styled.p`
  color: ${({theme}) => theme.title};
  font-family: 'Libre Baskerville', serif;
`;
