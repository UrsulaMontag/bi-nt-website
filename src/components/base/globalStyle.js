import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    color: none;
    opacity: 1;
    box-sizing: border-box; 
    
}

  html {
    font-size: 62.5%;
    font-family: Roboto, sans-serif;
   
  }

  body {
      font-size: 1.6rem;
      overflow: hidden;
      color: var(--color-dark);
      
  }
  :root {
    --color-light:  #F2F2F2;
    --color-dark: #262223;
    --accent-color-green: #155902;
      }
  
`;

export default GlobalStyle;
