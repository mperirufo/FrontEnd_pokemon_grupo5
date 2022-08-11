import React from 'react'
import Square from './Square'

const Pokelist = ({pokemons}) => {
  console.log(pokemons)
  return (
    <div className='py-[25px] flex flex-wrap items-center justify-center'>
      {pokemons.map((pokemon =>
        <Square
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types[0].type.name}
          border={pokemon.border}
          pokemon={pokemon}
        />
      ))}
    </div>
  )
}

export default Pokelist