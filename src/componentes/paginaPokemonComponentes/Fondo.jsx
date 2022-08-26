import { useEffect, useState } from "react"
import React from 'react'
import HeaderPokemon from './HeaderPokemon'

const Fondo = ({id}) => {

  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({datos_pokemon: {nombre:' '}})
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
  const [selectedPokemonMoves, setSelectedPokemonMoves] = useState("")

const getPokemonDetails = () => {
  fetch(`http://localhost:4000/pokemons/pokemon/${id}`, {mode:'cors'})
  .then((res) => {
    return res.json()})
  .then((fetchedPokemon) => {
    if (fetchedPokemon.datos_pokemon) {
      setSelectedPokemonDetails(fetchedPokemon);
      setPokemonType(fetchedPokemon?.types[0]?.nombre)
      setPokemonType2(fetchedPokemon.types.nombre)
      setSelectedPokemonHP(fetchedPokemon.datos_pokemon.hp)
      setSelectedPokemonATK(fetchedPokemon.datos_pokemon.atk)
      setSelectedPokemonDEF(fetchedPokemon.datos_pokemon.def)
      setSelectedPokemonSATK(fetchedPokemon.datos_pokemon.satk)
      setSelectedPokemonSDEF(fetchedPokemon.datos_pokemon.sdef)
      setSelectedPokemonSPD(fetchedPokemon.datos_pokemon.spd)
      setPokemonId(fetchedPokemon.id)
      setSelectedPokemonText(fetchedPokemon.datos_pokemon.descripcion)
      setSelectedPokemonMoves(fetchedPokemon?.moves?.nombre)}
      else {
        fetch(`http://localhost:4000/pokemons/firstpokemon`, {mode:'cors'})
        .then((res) => {
          return res.json()})
        .then((fetchedPokemon) => {
          setSelectedPokemonDetails(fetchedPokemon);
          setPokemonType(fetchedPokemon?.types[0]?.nombre)
          setPokemonType2(fetchedPokemon.types.nombre)
          setSelectedPokemonHP(fetchedPokemon.datos_pokemon.hp)
          setSelectedPokemonATK(fetchedPokemon.datos_pokemon.atk)
          setSelectedPokemonDEF(fetchedPokemon.datos_pokemon.def)
          setSelectedPokemonSATK(fetchedPokemon.datos_pokemon.satk)
          setSelectedPokemonSDEF(fetchedPokemon.datos_pokemon.sdef)
          setSelectedPokemonSPD(fetchedPokemon.datos_pokemon.spd)
          setPokemonId(fetchedPokemon.id)
          setSelectedPokemonMoves(fetchedPokemon?.moves?.nombre)
          setSelectedPokemonText(fetchedPokemon.datos_pokemon.descripcion)
        })
      }
      
  })
  .catch ((error) => {
      console.log(error)
  })
}

useEffect(() => {
  getPokemonDetails()
} , [id]);

console.log(pokemonId)
console.log(selectedPokemonDetails)

  return (
    <>
      <div className="h-auto w-auto"> 
          
        <HeaderPokemon 
        name={selectedPokemonDetails?.datos_pokemon?.nombre}
        pokemonTypes={pokemonTypes}
        pokemonType={pokemonType}
        pokemonType2={pokemonType2}
        id={selectedPokemonDetails?.datos_pokemon?.id}
        selectedPokemonDetails={selectedPokemonDetails}
        selectedPokemonText={selectedPokemonText}
        selectedPokemonHP={selectedPokemonHP}
        selectedPokemonDEF={selectedPokemonDEF}
        selectedPokemonATK={selectedPokemonATK}
        selectedPokemonSATK={selectedPokemonSATK}
        selectedPokemonSDEF={ selectedPokemonSDEF}
        selectedPokemonSPD={ selectedPokemonSPD}
        pokemonId={pokemonId}
        selectedPokemonMoves={selectedPokemonMoves}
        />
      </div> 
    </>
  )
}

export default Fondo