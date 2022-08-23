import React from 'react'
import Carta from './Carta'
import Pokeball from '../../imagenes/Pokeball.png'
import {Link} from 'react-router-dom'
import PaginaPokemon from '../../paginas/PaginaPokemon'

const HeaderPokemon = ({pokemonType2, pokemonType, pokemonId, pokemonTypes, name , id ,  selectedPokemonDetails, selectedPokemonText, selectedPokemonHP, selectedPokemonDEF,selectedPokemonATK,selectedPokemonSDEF,selectedPokemonSATK,selectedPokemonSPD}) => {

  const nextPokemon = parseInt(id) + 1;
  const previousPokemon = parseInt(id) - 1;

  return ( 
    <div className={`flex ${pokemonType} flex-col  h-[844px] w-[390px]`}>
     
      <div className='flex mt-4 justify-around items-center text-white'>
        <Link
        to={`/ `}
        >
        
          <i className="fa-solid flex  text-[25px] fa-arrow-left  ml-6"></i>
        </Link>
        <p className='ml-4 font-[700] capitalize text-2xl'>{name}</p>
        <p className='ml-[140px] font-semibold text-md'>#0{id}</p>
      </div>
      <div>
        <img 
        className='opacity-5 static ml-[185px] h-[200px] w-[200px]'
        src={Pokeball} alt="" />
      </div>
       {(pokemonId < 2) ? <Link  to={`/PaginaPokemon/${nextPokemon} `} >
          <i className="fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-right "></i>
          </Link>
         : 
        <div className='flex items-center justify-between'> 
          <Link to={`/PaginaPokemon/${previousPokemon} `} >
            <i className="fa-solid flex  text-[25px] text-white ml-6  fa-arrow-left "></i>
          </Link> 
          <Link to={`/PaginaPokemon/${nextPokemon} `} > 
            <i className="fa-solid flex  text-[25px] text-white mr-6  fa-arrow-right "></i>
          </Link> 
        </div>}
      
      <img 
      className='flex  top-[75px]  left-0 right-0 h-[250px] m-auto w-[250px] absolute'
      
      src={selectedPokemonDetails.datos_pokemon?.imagen} />
       
       <Carta
        pokemonType={pokemonType}
        pokemonType2={pokemonType2}
        selectedPokemonDetails={selectedPokemonDetails}
        selectedPokemonText={selectedPokemonText}
        selectedPokemonHP={selectedPokemonHP} 
        selectedPokemonDEF={selectedPokemonDEF}
        selectedPokemonATK={selectedPokemonATK}
        selectedPokemonSDEF={selectedPokemonSDEF}
        selectedPokemonSPD={selectedPokemonSPD}
        selectedPokemonSATK={selectedPokemonSATK}
        pokemonTypes={pokemonTypes}
        
       />
      
    </div>
  )
}

export default HeaderPokemon