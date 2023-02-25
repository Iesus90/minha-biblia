import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    margin: 0 10px 0 10px;
    grid-template-columns: repeat(10, auto);
    justify-content: center;
    align-content: start;
`;

export const GridElement = styled.button`
    text-align: center; 
    margin: 20px 5px 0 0;
    padding: 5px 5px 5px 5px;
    border-width: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.title};
    font-size: 15px;
    border-radius: .2rem;
    &:hover {
        background-color: ${({ theme }) => theme.houverBackground};
    }
    &:focus {
        background-color: ${({ theme }) => theme.selectedBackground};
        color: ${({ theme }) => theme.selectedColor};
        font-weight: bold;
    }
`;