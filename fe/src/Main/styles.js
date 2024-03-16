import { styled } from 'styled-components';

export const Container = styled.main`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Input = styled.input`
    padding: 1rem;
    margin-top: 1.3rem;
    width: 30vw;
    border: none;
    outline: none;
    border-bottom: solid #fff 0.5px;
    margin-bottom: 1rem;
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    text-align: center;

    &::placeholder{
        color: #ccc;
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
        background-color: #123c66;
    }
`;