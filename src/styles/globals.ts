import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #F0F2F5;
        --red: #E522E4D;
        --blue: #5429CC; 

        --blue-light: #6933ff;

        --text-title: 363F5F;
        --text-body: 969CB3;

        --shape: #ffffff;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    html {
        @media (max-width: 1080px) {font-size: 93.75%}
        @media (max-width: 720px) {font-size: 87.5%}
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    

`
