import styled from 'styled-components';

export const Container = styled.div`
   margin: 75px auto;
   width: 100%;
   max-width: 85%;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #0A2329;
   border-radius: 1em;
   color: #ffffff;
   font-family: 'Cinzel', serif;

   >div {
      margin: 25px 0;
      display: flex;
      flex-direction: column;

      img:first-child {
         margin: 25px;
         width: 350px;
         z-index: 1;
      }

      img:last-child {
         margin-top: -70px;
         width: 480px;
      }
   }

   >section {
      display: grid;
      grid-template-columns: 1fr 1fr;

      >div {
         margin: 10px 30px;

         h3 {
            margin: 5px;
            width: fit-content;
            font-size: 1.5rem;
            font-weight: 700;
            border-bottom: 1px solid #3C332C;
            color: #6A5D51;
         }

         p {
            margin: 5px;
            font-size: 1rem;
         }
      }

      @media(max-width: 920px) {
         grid-template-columns: 1fr;
      }
   }


`