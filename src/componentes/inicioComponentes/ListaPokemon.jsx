import React from 'react'
import AgregarPokemon from './AgregarPokemon'
import Pokemon from './Pokemon'
import BotonLogin from './BotonLogin'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ListaPokemon = ({ allPokemons}) => {
const location = useLocation()

return (
    <>
    <div 
    id='Lista'
    className='flex flex-wrap h-full fuente bg-[#F7F7F7]  items-center justify-center mt-2'>
            
        {location.state!==null? <AgregarPokemon/> : <BotonLogin/>}
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