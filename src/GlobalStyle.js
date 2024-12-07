import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

h1 {
  font-size: 3.25em;
  letter-spacing: -0.025em;
  font-weight: 300;
}

h2 {
    font-size: 2.5em;
    letter-spacing: -0.015em;
}

strong {
  color: rgb(255 138 0);
}
`;

