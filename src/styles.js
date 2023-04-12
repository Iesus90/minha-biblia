import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.background};
  font-size: calc(5px + 2vmin);
  color: ${({theme}) => theme.title};
  margin: 60px 0 0 0;
`;
