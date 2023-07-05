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
    position: sticky;
    top: 0;
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
    max-height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    header {
        flex-shrink: 0;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 500;
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