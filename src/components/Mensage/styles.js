import styled from 'styled-components';

export const ContainerMensage = styled.div`
    background-color: ${({theme}) => theme.background}
    width: 100%;
    height: 100vh;
`;

export const MensageError = styled.h1`
  margin: 20px 0 0 20px;
  color: ${({theme}) => theme.title};
`;
