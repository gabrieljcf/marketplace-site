import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #EF4983CC;
    --pink-light: #F8EDF0;
    --pink-medium: #EF498366;
    --pink-dark: #EF4983;

    --text-body: #633939;
    --text-paragraph: #63393980;
    --text-description: #633939B2;
    --text-light: #FFFFFF;
    --text-dark: #000000;
    
    --line: #C4C4C466;

    --background: #FFF;
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

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  li { 
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }

  .swiper {
    padding: 10px;
  }
  
  .swiper-pagination-bullet {
    background: var(--pink);
  }

  .swiper-pagination {
    margin-top: 5rem;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 830px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 3rem;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
