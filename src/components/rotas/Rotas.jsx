import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import Nav from '../navbar/Nav';
import Spells from '../spells/Spells'

function Rotas(){
  return(
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spells' element={<Spells />} />
      </Routes>
    </Router>
  )
}
export default Rotas;