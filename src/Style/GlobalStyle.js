import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  .primeColor {
    background-color: #FFEC00;
  }
  .btn-prime {
    background-color: #FFEC00;
    color: black;
    font-weight: bold;

    &:hover {
      background-color: yellow;
    }
  }

  .list-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .light-dark {
    color:#212529b0;
  }

  .display-7 {
    font-size: 20px;
  }
  .display-10 {
    font-size: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
  
   a{
    text-decoration: none;
    color: black;
   }

   .my-10 {
    margin-top: 100px;
    margin-bottom: 100px;
   }


`
export default GlobalStyle