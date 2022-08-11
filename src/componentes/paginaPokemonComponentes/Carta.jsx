import React from 'react'
import Height from '../../imagenes/Height.svg'
import Weight from '../../imagenes/Weight.svg'

const Carta = ({pokemonType, pokemonTypes ,pokemonType2, selectedPokemonDetails ,selectedPokemonText,selectedPokemonHP,selectedPokemonDEF,selectedPokemonATK,selectedPokemonSDEF,selectedPokemonSATK,selectedPokemonSPD}) => {
  return (
    <div
    className='bg-white flex flex-col justify-start items-center   rounded-xl m-[5px] h-2/3 w-[380px]'>
       
      <div className="mt-[70px] flex w-full justify-center text-center  text-white">
          {pokemonTypes.map( (type) => (
            <p className={` h-[35px] w-[70px] ${type.type.name} rounded-full text-center flex items-center justify-center capitalize m-[10px]`}>{type.type.name}</p>
          ))}
        
      </div>
      <p className={`  text${pokemonType} font-[700] mt-4`}>About</p>

      <div className='flex flex-row mt-2 justify-evenly w-[350px] h-auto'>
          <div className=' flex-col justify-center items-center'> 
            <div className='flex items-center'>
              <img src={Weight}/>
              <p className='mx-2'>{selectedPokemonDetails.weight / 10} kg</p>
              <hr className='bg-gray-200 ml-[25px] h-[60px] w-[2px]'/>
            </div>  
            <p className='text-gray-600 ml-4 text-sm'>Weight</p>
          </div>
          <div className=' flex-col justify-center pl-6 items-center '> 
            <div className='flex  items-center '>
              <img src={Height} />
              <p className='mx-2'>{selectedPokemonDetails.height / 10} m</p>
              <hr className='bg-gray-200 ml-[25px] h-[60px] w-[2px] '/>  
            </div>  
            <p className='text-gray-600  text-sm'>Height</p>
        </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='capitalize'>{selectedPokemonDetails.moves && selectedPokemonDetails?.moves[0]?.move?.name}</p>
            <p className='capitalize'>{selectedPokemonDetails.moves && selectedPokemonDetails?.moves[1]?.move?.name}</p>
            <p className='text-gray-600 mt-[9px] text-sm'>Moves</p>
          </div>
      </div>
          <p className='mx-4 mt-4  text-center'>{selectedPokemonText.replace('','')}</p>
        <h3 className={`text-center text${pokemonType}  mr-2 mt-16 text-xl font-[700] `}>Base Stats</h3>
        <div className='flex '>
          <div className={`flex flex-col font-[700] text-sm text${pokemonType}`}>
            <p>HP</p>
            <p>ATK</p>
            <p>DEF</p>
            <p>SATK</p>
            <p>SDEF</p>
            <p>SPD</p>
          </div>
          <hr className='bg-gray-200 mx-2  h-[120px] w-[2px] '/> 
          <div>
            <p className={` text${pokemonType} text-sm font-[700]`}>{selectedPokemonDetails.stats && selectedPokemonDetails?.stats[0]?.base_stat}</p> 
            <p className={` text${pokemonType} text-sm font-[700]`}>{selectedPokemonDetails.stats && selectedPokemonDetails?.stats[1]?.base_stat}</p>
            <p className={` text${pokemonType} text-sm font-[700]`}>{selectedPokemonDetails.stats && selectedPokemonDetails?.stats[2]?.base_stat}</p>
            <p className={` text${pokemonType} text-sm font-[700]`}>{selectedPokemonDetails.stats && selectedPokemonDetails?.stats[3]?.base_stat}</p>
            <p className={` text${pokemonType} text-sm font-[700]`}>{selectedPokemonDetails.stats && selectedPokemonDetails?.stats[4]?.base_stat}</p>
            <p className={` text${pokemonType} text-sm font-[700]`}>{selectedPokemonDetails.stats && selectedPokemonDetails?.stats[5]?.base_stat}</p> 
          </div>

          <div className='flex ml-2 flex-col  items-center w-[280px]'>
            
            <div className={` bg-slate-300 rounded-xl h-[4px] mt-2 w-[100%]`}>
              <div className={`${pokemonType} rounded-xl h-[4px] w-[${selectedPokemonHP / 2}%] `}></div>
            </div>
            
            <div className={`  bg-slate-300 rounded-xl h-[4px] mt-4 w-[100%]`}>
              <div className={`${pokemonType}  rounded-xl h-[4px]  w-[${selectedPokemonATK / 2}%] `}>
              </div>
            </div>

            <div className={`bg-slate-300 rounded-xl h-[4px] mt-4 w-[100%]`}>
              <div className={`${pokemonType}  rounded-xl h-[4px]  w-[${selectedPokemonDEF / 2}%] `}></div>
            </div>

            <div className={`  bg-slate-300 rounded-xl h-[4px] my-[12px] w-[100%]`}>
              <div className={`${pokemonType}  rounded-xl h-[4px]  w-[${selectedPokemonSATK / 2 }%] `}></div>
            </div>

            <div className={` bg-slate-300  rounded-xl h-[4px] mt-[4px] w-[100%]`}>
              <div className={`${pokemonType}  rounded-xl h-[4px]  w-[${selectedPokemonSDEF / 2}%] `}></div>
            </div>

            <div className={` bg-slate-300  rounded-xl h-[4px] mt-[15px] w-[100%]`}>
              <div className={`${pokemonType}  rounded-xl h-[4px]  w-[${selectedPokemonSPD / 2}%] `}></div>   
            </div>

          </div>
        </div>
    </div>
  )
}

export default Carta