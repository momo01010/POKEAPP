import React from 'react'
import home from '../img/home.png'
import pokeball from '../img/pokeball.png'
import InputHome from './InputHome'

const Home = ({setIsLogged}) => {
  return (
    <div className='home'>
       <img src={home} alt="home image" />
       <h2>Hi Poketrainer!</h2> 
       <p>Let´s hunt pokemons!!!</p>
       <div className='form'>
          <InputHome setIsLogged={setIsLogged}/>
       </div>
    </div>
  )
}

export default Home