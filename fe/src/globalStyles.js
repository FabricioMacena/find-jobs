import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'IBM Plex Sans', sans-serif;
    }

    body{
        width: 100vw;
        min-height: 100vh;
    }
`;