import {createGlobalStyle} from "styled-components"
import {animation} from "./default";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local("Nunito Regular"), local("Nunito-Regular"), url('../fonts/XRXV3I6Li01BKofIOOaBXso.woff2') format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local("Nunito Regular"), local("Nunito-Regular"), url('../fonts/XRXV3I6Li01BKofIMeaBXso.woff2') format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  
}

/* vietnamese */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local("Nunito Regular"), local("Nunito-Regular"), url('../fonts/XRXV3I6Li01BKofIOuaBXso.woff2') format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local("Nunito Regular"), local("Nunito-Regular"), url('../fonts/XRXV3I6Li01BKofIO-aBXso.woff2') format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local("Nunito Regular"), local("Nunito-Regular"), url('../fonts/XRXV3I6Li01BKofINeaB.woff2') format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


    html{
      height:100%;
    }
    body{
    font-family: "Nunito",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
 
  width: 100%;

    }
    
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    button{
      background-color: unset;
      border: 0;
      outline: none!important;
      cursor: pointer;
       ${animation(["color", "background-color"])};
      font-family: "Nunito",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  
    }
   input{
    outline: none;
         border: 0;
         &[type="number"]{
 
         &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
         }
   }
   a{
   text-decoration: none;
   color: #5a6268;
   }
   
   i.fa-phone {
    transform: rotateY(180deg) !important;
  }
    `
export default GlobalStyle