import styled from 'styled-components'

export const Container = styled.div`
   position: sticky;
   top: 0;

   nav {
      margin: 0 auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0A2329;
      color: #ffffff;

      >div {
         margin-left: 50px;
         display: flex;
         align-items: flex-end;
         font-family: 'Mountains of Christmas', cursive;
         font-size: 2.25rem;

         img {
            margin: 0 10px;
            width: 68px;
         }
      }
   }
`