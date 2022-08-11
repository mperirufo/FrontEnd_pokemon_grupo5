import React from 'react'
import Pokemon from './Pokemon'

const ListaPokemon = ({ allPokemons}) => {
  return (
    <>
    <div 
    id='Lista'
    className='flex flex-wrap h-full fuente bg-[#F7F7F7]  items-center justify-center mt-2'>
        {allPokemons.map((pokemon, index) =>
            <Pokemon
            id={pokemon.id}
            img={pokemon.image}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            key={index}
            pokemon={pokemon}
            />
            )}
    </div>
    </>
  )
}

export default ListaPokemon