import { styled } from 'styled-components';

export const Main = styled.main`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    #introJobs{
        font-size: 1.2rem;
        margin: 20px;
    }

    .linkArticle{
        text-decoration: none;
    }
`;

export const Article = styled.article`
    width: 50vw;
    background-color: #0e365e;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    padding: 15px 10px;
    transition: 100ms linear;

    &:hover{
        box-shadow: 5px 5px 5px #2b5fcc;
        cursor: pointer;
        transform: scale(1.03);
    }

    .jobTitle{
        margin-bottom: 15px;
        font-size: 1.4rem;
    }

    .companyName{
        color: #d5d9d4;
    }

    .linkJob{
        color: #65f24b;
        text-decoration: none;
        transition: 0.3s;
    }

    .linkJob:hover{
        color: #2eb814;
    }

    .dataLink{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        width: 40%;
    }

    .dataJob{
        width: 60%;
    }
`;

export const Pagination = styled.div`
    width: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0 40px 0;

    button{
        outline: none;
        border: none;
        background-color: #0e365e;
        border-radius: 10px;
        padding: 15px 30px;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        background-color: #2b5fcc;
    }
`;