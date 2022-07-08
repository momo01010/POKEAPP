import React from 'react'
import pikachu from '../img/pikachu.png'

const Footer = () => {
  return (
    <article className='footer'>
        <footer>
            <p><b>Web Developer : </b>Guillermo Vidal</p>
            <p>------------------------------</p>
            <img src={pikachu} alt="" />
        </footer>
    </article>
  )
}

export default Footer