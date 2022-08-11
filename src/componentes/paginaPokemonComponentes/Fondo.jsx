import { useEffect, useState } from "react"
import React from 'react'
import HeaderPokemon from './HeaderPokemon'

const Fondo = ({id}) => {

  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({})
  const [pokemonType, setPokemonType] = useState('')
  const [pokemonType2 , setPokemonType2] = useState ('')
  const [selectedPokemonText, setSelectedPokemonText] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
  const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
  const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
  const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
  const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
  const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")
  const [pokemonId, setPokemonId] = useState("")

const getPokemonDetails = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then((fetchedPokemon) => {
      setSelectedPokemonDetails(fetchedPokemon);
      setPokemonType(fetchedPokemon.types[0].type.name)
      setPokemonType2(fetchedPokemon.types[1]?.type.name)
      setPokemonTypes(fetchedPokemon.types)
      setSelectedPokemonHP(fetchedPokemon.stats[0].base_stat)
      setSelectedPokemonATK(fetchedPokemon.stats[1].base_stat)
      setSelectedPokemonDEF(fetchedPokemon.stats[2].base_stat)
      setSelectedPokemonSATK(fetchedPokemon.stats[3].base_stat)
      setSelectedPokemonSDEF(fetchedPokemon.stats[4].base_stat)
      setSelectedPokemonSPD(fetchedPokemon.stats[5].base_stat)
      setPokemonId(fetchedPokemon.id)
      
  })
  .catch ((error) => {
      console.log(error)
  })
}

const getPokemonText = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  .then(res => res.json())
  .then((fetchedPokemon) => {
  setSelectedPokemonText(fetchedPokemon.flavor_text_entries[5].flavor_text)
      
      
  })
  .catch ((error) => {
      console.log(error)
  })
}


useEffect(() => {
  getPokemonDetails()
  getPokemonText()
} , [id]);

console.log(pokemonId)

  return (
    <>
      <div className="h-auto w-auto"> 
          
        <HeaderPokemon 
        name={selectedPokemonDetails.name}
        pokemonTypes={pokemonTypes}
        pokemonType={pokemonType}
        pokemonType2={pokemonType2}
        id={selectedPokemonDetails.id}
        selectedPokemonDetails={selectedPokemonDetails}
        selectedPokemonText={selectedPokemonText}
        selectedPokemonHP={selectedPokemonHP}
        selectedPokemonDEF={selectedPokemonDEF}
        selectedPokemonATK={selectedPokemonATK}
        selectedPokemonSATK={selectedPokemonSATK}
        selectedPokemonSDEF={ selectedPokemonSDEF}
        selectedPokemonSPD={ selectedPokemonSPD}
        pokemonId={pokemonId}
        />

       

      </div> 
    </>
  )
}

export default Fondo