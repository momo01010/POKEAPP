import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokeInfo from './components/PokeInfo'
import pokenav from './img/pikachu1.png'
import Footer from './components/Footer'
import PokeFilter from './components/PokeFilter'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useState } from 'react'


function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <nav className='NavBar'>
        <img src={pokenav} alt="poke nav" />
        <ul>
          <li><Link className='navtext' to='/'><i class="fa-solid fa-house"></i></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home setIsLogged={setIsLogged}/> } />
          <Route element={ <ProtectedRoutes isLogged={isLogged}/> }>
            <Route path='/pokedex' element={ <Pokedex/> } />
            <Route path='/pokedex/:id' element={ <PokeInfo/> } />
            <Route path='/pokefilter/:type' element={ <PokeFilter/> }/>
          </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
