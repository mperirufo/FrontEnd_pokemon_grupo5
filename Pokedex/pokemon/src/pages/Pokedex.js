import React, { useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Pokelist from '../components/Pokelist'
import Spinner from '../components/Spinner'
import { useEffect } from 'react'


const Pokedex = () => {

    const [listado, setListado] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [busqueda, setBusqueda] = useState ("")
    


    useEffect(() => {
        setIsLoading(true);
        fetch('https://us-central1-senpai-9b555.cloudfunctions.net/getFullList')
          .then((response) => response.json())
          .then((resultado) => {
            console.log('resultado:', resultado)
            setListado(resultado)
            setIsLoading(false);
          })
      }, []);

      const handleString = () => {
        const strAscending = [...listado].sort((a,b) => 
          a.name < b.name ? -1 : 1
        );
        setListado(strAscending)
      }
    
      const handleNumeric = () => {
        const numAscending = [...listado].sort((a,b) =>
          a.id - b.id
        );
        setListado(numAscending)
      }

      
        
      

  return (
    <div className='bg-[#ffca2a] w-full h-screen'>
        <div className='flex justify-center items-center p-[20px] bg-[#ffca2a]'>
            <div className='px-[20px] pt-[40px] border-2 border-gray-600 shadow-xl md:w-2/5 rounded-xl bg-[#f7f7f7]'>
                <Header
                  handleString={handleString}
                  handleNumeric={handleNumeric}
                />
                <Search
                  setBusqueda={setBusqueda}
                />
                {isLoading && <Spinner/>}
                
                <Pokelist
                    pokemons={listado.filter((pokemon) => pokemon.name.match(busqueda))}

                />   
            </div>
        </div>
    </div>
  )
}

export default Pokedex