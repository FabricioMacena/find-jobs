import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'IBM Plex Sans', sans-serif;
        color: #fff;
    }

    body{
        max-width: 100vw;
        min-height: 100vh;
        background-color: #195591;
    }

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #e3effa;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track{
        background-color: #195591;
    }
`;