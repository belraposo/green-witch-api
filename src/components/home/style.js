import styled from 'styled-components';

export const Container  = styled.div`
   width: 100%;
   color: #ffffff;
   font-family: 'Cinzel', serif;

   body {
      width: 100%;

      section:first-child {
         margin-top: 75px;
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;

         >img {
            width: 450px;
         }

         p {
            margin-top: 10px;
            width: 100%;
            max-width: 75%;
            font-size: 1.25rem;
            font-weight: 700;
            text-align: center;
         }
      }

      section:last-child {
         margin: 50px 0 30px;
         width: 100%;
         display: flex;
         flex-direction: row-reverse;
         justify-content: space-around;

         div:first-child {
            position: relative;
            
            img:first-child {
               width: 250px;
               position: absolute;
               bottom: 0;
               left: -30%;
            }
   
            img:last-child {
               width: 400px;
            }
         }

         div:last-child {
            width: 100%;
            max-width: 35rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;

            >h2 {
               margin: 15px 0;
               font-size: 2.25rem;
               font-weight: 800;
            }

            p {
               font-size: 1.2rem;
            }

            button {
               margin-top: 12px;
               padding: 0.5rem 2rem;
               background-color: #0A2329;
               color: #ffffff;
               font-weight: 800;
               font-size: 1rem;
               border: none;
               border-radius: 2em;
               font-family: 'Cinzel', serif;
               transition: 0.4s ease-in-out;

               :hover {
                  background-color: #ffffff;
                  color: #0A2329;
                  cursor: pointer;
               }
            }
         }

         @media(max-width: 920px) {
            flex-direction: column-reverse;
            gap: 50px;
            align-items: center;

            div:last-child {
               margin-right: initial;
            }
         }
      }
   }
`