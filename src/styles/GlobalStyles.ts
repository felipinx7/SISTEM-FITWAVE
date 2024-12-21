import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* :root {
      --verde-limao: #7AD84B;
      --verde-musgo: #41723A;
      --verde-menta: #7BD19F;
      --verde-escuro: #407052;
      --cinza-medio: #565656;
      --preto: #000000;
    } */
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        font-family: 'Poppins', sans-serif;
        font-family: "Goldman", serif;
        overflow-x: hidden;

        &::-webkit-scrollbar{
            display: none;
        }
    }
    html{
        overflow-x: hidden;
    }
`;
