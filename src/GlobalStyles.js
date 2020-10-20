import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body, html{
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background-color: #000000;
  color: #333333;
} 

img{
  width: 100%;
}
`;
