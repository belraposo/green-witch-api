import { useEffect, useState } from 'react';
import Axios from '../../api/axiosInstance';
import { Container } from './style';
import Spell from '../../assets/spells-title.png'
import Varinha from '../../assets/varinha.png'

function Spells() {
  const [magician, setMagician] = useState([])

  useEffect(() => {
    Axios.get('/spells').then((response) => {
      setMagician(response.data)
    })
  }, [])

   return(
      <Container>
         <div>
            <img src={Spell} alt='Harry Potter' />
            <img src={Varinha} alt='Varinha' />
         </div>
         <section>
            { magician.map((item) => ( 
               <div>
                  <h3> {item.name} </h3>
                  <p> {item.description} </p>
               </div>
            ))}
         </section>
      </Container>
   )
}
export default Spells;