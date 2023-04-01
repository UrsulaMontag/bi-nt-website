import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    color: var(--color-dark);
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
      display: flex;
      flex-direction: column;
      align-items: center;
      
  }
  :root {
    --color-light:  #9F9FA609;
    --color-dark: #262625;
    --accent-color-green: #5EA653;
    --accent-color-darker: #297349;
    --accent-color-grey: #6F6E73;

      }
  
`;

export default GlobalStyle;
