import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: ${({ theme }) => theme.background};
    box-shadow: 0px 0px 20px black;
    z-index: 999;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const Bible = styled.h1`
    color: ${({ theme }) => theme.title};
    font-family: 'Libre Baskerville', serif;
`;

export const IconButton = styled.button`
    background-color: transparent;
    background-image: url(${({ theme }) => theme.icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
    padding: 15px 25px;
    margin: 0 0 0 10px;
    border-width: 0;
`;