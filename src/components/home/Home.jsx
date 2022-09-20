import { Link } from 'react-router-dom'
import { Container } from './style'
import Logo from '../../assets/harry-logo.png'
import Harry from '../../assets/harry.jpg'
import HarryPotter from '../../assets/harry2.jpg'

function Home() {
   return(
      <Container>
         <section>
            <section>
               <img src={Logo} alt='Harry Potter' />
               <p> The life of the boy Harry Potter does not have an iota of magic. He lives with his uncles and cousin, who don't like him at all. Harry's room is actually a closet under the stairs, and he's never celebrated a birthday in eleven years. Until, one day, Harry receives a mysterious letter, delivered by an owl: an invitation to study at an amazing place called Hogwarts School of Witchcraft and Wizardry. There he will find not only friends, sports practiced on flying brooms and magic everywhere, but also his destiny: to be a sorcerer's apprentice until the day he will have to face the worst force of evil, the wizard who murdered his parents. But for that, Harry will need to go through a series of challenges and face countless dangers. </p>
            </section>
            <section>
               <div>
                  <img src={HarryPotter} alt='Harry Potter' />
                  <img src={Harry} alt='Harry Potter' />
               </div>
               <div>
                  <h2> HARRY POTTER SPELLS </h2>
                  <p> Read about the spells used throughout the entire Harry Potter saga, even the most iconic ones! </p>
                  <Link to='/spells'> <button> LOOK </button> </Link>
               </div>
            </section>
         </section>
      </Container>
   )
}
export default Home