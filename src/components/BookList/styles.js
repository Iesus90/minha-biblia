import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow-y: auto;
    width: 50%;
`;

export const ListItem = styled.button`
    border-width: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.title};
    width: 100%;
    font-family: 'Libre Baskerville', serif;
    font-weight: bold;
    font-size: 15px;
    text-align: left;
    padding: 15px 0px 15px 20px;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    &:hover {
        background-color: ${({ theme }) => theme.houverBackground};
    }
    &:focus {
        background-color: ${({ theme }) => theme.selectedBackground};
        color: ${({ theme }) => theme.selectedColor};
    }
`;