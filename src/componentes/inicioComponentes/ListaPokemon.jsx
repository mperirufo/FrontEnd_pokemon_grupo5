import React from 'react'
import Pokemon from './Pokemon'

const ListaPokemon = ({ allPokemons}) => {
  console.log('allPokemons', allPokemons)
  return (
    <>
    <div 
    id='Lista'
    className='flex flex-wrap h-full fuente bg-[#F7F7F7]  items-center justify-center mt-2'>
        {allPokemons.map((pokemons, index) =>
            <Pokemon
            id={pokemons.id}
            img={pokemons.img}
            name={pokemons.name}
            // type={tipo.nombre}
            key={index}
            pokemons={pokemons}
            />
            )}
    </div>
    </>
  )
}

export default ListaPokemon