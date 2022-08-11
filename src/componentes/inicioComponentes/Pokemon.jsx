import React from 'react'
import ImagenPokemon from './ImagenPokemon'
import { Link } from 'react-router-dom'


const Pokemon = ({type, name , img , id}) => {
  return (
    <>
    <Link         
     to={`/PaginaPokemon/${id}`}
     
     >

    <div className={`flex flex-col w-[110px] m-[5px] my-2 justify-between h-[140px]  bg-white rounded-lg borde${type} border-2`}>
      <div className='flex justify-end pr-[10px] pt-[5px]'>
          <p className={`font-light text${type}`}>#{id}</p>
      </div>
      <div className='flex items-center justify-center'>
          <ImagenPokemon
            img={img}
            />
      </div>
      <div className={`w-full h-[25px]  flex items-center  justify-center text-white ${type} rounded-b-[5px]`}>
          <h3 className='font-light capitalize'>{name}</h3>
          
      </div>
    </div>
    </Link>
    
    </>
  )
}

export default Pokemon