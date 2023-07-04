import { styled } from "styled-components";

const WelcomeStyle = styled.div`
  display: flex;

  .hide {
    display: none;
  }
  aside {
    width: 24%;
    min-width: 300px;
    
    min-height: 100vh;
    background-color: #f4edc6;

    p {
        margin: 0;
    }

    .link-item {
        &:hover {
            background-color: #FFEC00;

            .icon-box {
                color: blue;
            }
        }
    }
  }

  .rightSide {
    flex: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    header {
        flex-shrink: 0;
        .menu-bar {
            cursor: pointer;
        }
    }
    
   main {
    flex-grow: 1;
   }
  }

  
`
export default WelcomeStyle