import React from 'react'
import './square.css'
import { Link } from 'react-router-dom'

const Square = ({pokemon}) => {
    console.log (pokemon.id, pokemon.name, pokemon.image, pokemon.types[0].type.name, pokemon.border)

  return (
    <Link to={`/Card/${pokemon.id}`}>
     <div className={`w-[200px] h-[200px]  border-2 rounded-2xl flex flex-col justify-between m-[10px] hover:shadow-xl border${pokemon.types[0].type.name}`}>
         <div className='flex justify-end pr-[10px] pt-[5px]'>
          {(() => {
            if (pokemon.id<10) {
              return (
                <p className='font-bold'>#00{pokemon.id}</p>
              )
            } else {
              return (
                <p className='font-bold'>#0{pokemon.id}</p>
              )
            }
          })()}
        </div>

         <div className='flex items-center justify-center'>
            <img src={pokemon.image} alt={pokemon.name} className='w-[120px] h-[120px]'/>
         </div>
        <div className={`h-[35px] w-full flex justify-center items-center text-white card ${pokemon.types[0].type.name}`}>
            <p className='capitalize'>{pokemon.name}</p>
         </div>
     </div>
    </Link>
  )
}

export default Square