import React from 'react'
import Pokeball from '../img/Pokeball.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Header = ({handleNumeric, handleString}) => {

  const [sortByNumber, setSortByNumber] = useState(true)

  const handleChange = () => {
    if(sortByNumber) {
      handleNumeric()
    } else {
      handleString()
    }
    setSortByNumber(!sortByNumber)
  }

  return (
    <div className='flex justify-between text-[#212121]'>
        <div className='flex justify-between items-center w-full'>
            <Link to='/'>
            <div className='flex items-center'>
                <img src={Pokeball} className='w-[20%] mr-[20px] md:mr-10' alt='imgPokeball'/>
                <p className='text-4xl md:text-6xl font-black'>Pokédex</p>
            </div>
            </Link>
            <div className='flex hover:shadow-lg hover:border-2 p-[5px] rounded-lg' onClick={() => handleChange()}>
              {sortByNumber ? <i className='fa-solid fa-arrow-down-a-z text-[30px]'></i> :  <i className='text-[30px] fa-solid fa-arrow-down-1-9'></i>}
            </div>
        </div>
    </div>
  )
}

export default Header