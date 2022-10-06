import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --background: #C1F6ED;
   --black:#5CFF5C;
   --purple:#3bedb7;
   --pink:#B1D8B7;
   --white:#ffffff;
   --nav:#02353C;
   --nav2:#02353C;
}


*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
  ${"" /* overflow-y: scroll; */}
  scroll-behavior:smooth;
  
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`;

//  /* Colors */
