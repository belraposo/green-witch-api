import { createGlobalStyle } from 'styled-components';
import Background from './assets/background-animated.gif'

export default createGlobalStyle`
   * {
      margin: 0%;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background-image: url(${Background});
      background-repeat: repeat;
   }
`