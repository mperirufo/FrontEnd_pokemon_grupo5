import React ,{ useState , useEffect } from 'react'
import Buscador  from '../componentes/inicioComponentes/Buscador'
import Header from '../componentes/inicioComponentes/Header'
import ListaPokemon from '../componentes/inicioComponentes/ListaPokemon'
import Spinner from '../componentes/inicioComponentes/Spinner'



const Inicio = () => {

  const [valor, setValor] = useState('') 
  const [cargando, setCargando] = useState(false)
  const [allPokemons, setAllPokemons] = useState([])
  

  useEffect(() => {
    setCargando(true)

    fetch('http://localhost:4000/pokemons/getallpokemons')

      .then((response) => response.json())
      .then((resultado) => {
        setAllPokemons(resultado) 
        setCargando(false)
      })
      
  }, []);

  const handleString = () => {
    const strAscending = [...allPokemons].sort((a,b) => 
      a.name < b.name ? -1 : 1
    );
    setAllPokemons(strAscending)
  }

  const handleNumeric = () => {
    const numAscending = [...allPokemons].sort((a,b) =>
      a.id - b.id
    );
    setAllPokemons(numAscending)
  }


  
  return (
    <>
        <div className='flex w-[390px] h-full m-auto  border-black border-[0.1px] fuente flex-col bg-[#F7F7F7] '>
            <Header 
            handleNumeric={handleNumeric}
            handleString={handleString}
            />
            <Buscador 
            onChange={setValor}
            

            /> 
            {cargando && <Spinner />}
            <ListaPokemon 
            allPokemons={allPokemons.filter((pokemon) => pokemon.name.match(valor))} 
            
            />

        </div>    
    </>
  )
}

export default Inicio