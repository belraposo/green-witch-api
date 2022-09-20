import { Link } from 'react-router-dom'
import { Container } from './style'
import Caldeirao from '../../assets/caldeirao.png'

function Nav() {
   return(
      <Container>
      <nav>
         <div>
            <Link to='/'> <img src={Caldeirao} alt='Caldeirão Logo' /> </Link>
            <h2> Green Witch </h2>
         </div>
      </nav>
   </Container>
   )
}
export default Nav