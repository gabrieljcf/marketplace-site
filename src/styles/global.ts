import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #EF4983CC;
    --pink-light: #F8EDF0;
    --pink-medium: #EF498366;
    --pink-dark: #EF4983;

    --text-body: #633939;
    --text-paragraph: #63393980;
    --text-light: #FFFFFF;
    
    --line: #C4C4C466;
    
    --background: #f0f2f5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing:antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`