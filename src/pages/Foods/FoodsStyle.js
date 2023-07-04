import { styled } from "styled-components";

const FoodsStyle = styled.section`
   .img-box {
    height: 200px;
    overflow: hidden;
    min-width: 150px;
    
    img {
      transition: transform 0.5s ease;

      &:hover {
         transform: scale(1.1);
      }
    }

   }

   .info-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   
`

export default FoodsStyle;