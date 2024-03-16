import { styled } from 'styled-components';

export const Container = styled.main`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #90acd1;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Input = styled.input`
    padding: 1rem;
    width: 70vw;
    border: none;
    outline: none;
    border-bottom: solid #000 1px;
    margin-bottom: 1rem;
    background-color: #cccccc10;
    color: #fff;
    font-size: 16px;

    &::placeholder{
        color: #fff;
    }
`;

export const Submit = styled.input`
    padding: 1rem 3rem;
    border-radius: 10px;
    background-color: #14477a;
    border: none;
    cursor: pointer;
    color: #fff;
    margin: 2rem 0;

    &:hover{
        background-color: #1b558f;
    }
`;