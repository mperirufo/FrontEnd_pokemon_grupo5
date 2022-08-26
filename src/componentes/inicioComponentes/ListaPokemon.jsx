import React from 'react'
import AgregarPokemon from './AgregarPokemon'
import Pokemon from './Pokemon'

const ListaPokemon = ({ allPokemons}) => {
  return (
    <>
    <div 
    id='Lista'
    className='flex flex-wrap h-full fuente bg-[#F7F7F7]  items-center justify-center mt-2'>
            <AgregarPokemon/>
        {allPokemons.map((pokemons, index) =>

            <Pokemon
            id={pokemons.id}
            img={pokemons.imagen}
            name={pokemons.nombre}
            /*type={tipo.nombre}*/
            key={index}
            pokemons={pokemons}
            />
            )}
    </div>
    </>
  )
}

export default ListaPokemon