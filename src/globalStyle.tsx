import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
  }
  
  body {
    font-family: "Space Grotesk";
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    #root {
      display: flex;
      height: 100vh;
      gap: 349px;
    }
  }
`;

export default GlobalStyle;
