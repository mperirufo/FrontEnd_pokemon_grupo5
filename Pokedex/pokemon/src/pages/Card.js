import React, { useCallback } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pokeball_white from '../img/Pokeball_white.png'
import Weight from '../img/Weight.svg'
import Height from '../img/Height.svg'
import Spinner from '../components/Spinner'




const Card = () => {
  const {id}=useParams();
  
  const [pokeDetail, setPokeDetail] = useState({})
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
        fetch(`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
          .then((response) => response.json())
          .then((resultado) => {
            console.log('resultado:', resultado)
            setPokeDetail(resultado)
            setIsLoading(false);
          })
      }, [id]);
      console.log({id})
        console.log(pokeDetail)


      
      return isLoading ? (<Spinner/>): pokeDetail.types && (
      
        <div className={`flex flex-col justify-start items-center h-screen w-full pt-[50px] ${pokeDetail.types[0].type.name}`}>
          <div className={`w-1/4 card${pokeDetail.types[0].type.name} border-[5px] rounded-2xl shadow-xl`}>
            <div className='flex justify-between w-full z-1 p-[20px]'>
              
                <div className=' flex text-white z-10'>
                  <Link to='/Pokedex'>
                    <i className="fa-solid fa-arrow-left mr-[25px] text-3xl"></i>
                  </Link>
                  <h1 className='font-bold text-3xl capitalize'>{pokeDetail.name}</h1>
                </div>
                <div className='flex justify-end pr-[10px] pt-[5px] text-white z-1'>
                  {(() => {
                    if (pokeDetail.id<10) {
                      return (
                        <p className='font-bold'>#00{pokeDetail.id}</p>
                      )
                    } else {
                      return (
                        <p className='font-bold'>#0{pokeDetail.id}</p>
                      )
                    }
                  })()}
                </div>
              </div>
              
                <div className='text-2xl text-white p-[20px]'>
                {(() => {
                    if (pokeDetail.id<2) {
                      return (
                        <Link to={`/Card/${pokeDetail.id+1}`}>
                            <i className="fa-solid fa-angle-right absolute right-[750px] top-[300px] z-10"></i>
                        </Link>
                      )
                    } else {
                      return (
                        <>
                        <Link to={`/Card/${pokeDetail.id-1}`}>
                          <i className="fa-solid fa-angle-left absolute left-[750px] top-[300px] z-10" ></i>
                        </Link>
                        <Link to={`/Card/${pokeDetail.id+1}`}>
                          <i className="fa-solid fa-angle-right absolute right-[750px] top-[300px] z-10" ></i>
                        </Link>
                        </>
                      )
                    }
                  })()}
                </div>
              
            <img src={Pokeball_white} alt='pokeballWhite' className='w-[230px] absolute z-0 md:top-[65px] md:right-[730px] opacity-10'/>
            <div className='w-[250px] absolute md:top-[100x] md:right-[850px]'>
                <img src={pokeDetail.image} />
            </div>
            <div className='px-[20px w-full mt-[180px] rounded-2xl bg-white flex flex-col'>
                 <div className='flex flex-row justify-center pr-[10px] pt-[5px] mt-[80px]'>
                  {(() => {
                    if (pokeDetail.types?.length <2) {
                      return (
                        <p className={`font-bold text-white capitalize ${pokeDetail.types[0].type.name} rounded-xl w-[70px] text-center`}>{pokeDetail.types[0].type.name}</p>
                      )
                    } else {
                      return (
                        <div className='text-white flex justify-center'>
                          <p className={`mx-[10px] font-bold text-white capitalize ${pokeDetail.types[0].type.name} rounded-xl w-[70px] text-center`}>{pokeDetail.types[0].type.name}</p>
                          <p className={`mx-[10px] font-bold text-white capitalize ${pokeDetail.types[1].type.name} rounded-xl w-[70px] text-center`}>{pokeDetail.types[1].type.name}</p>
                        </div>
                      )
                    }
                  })()}
                </div>
                <h1 className={`text${pokeDetail.types[0].type.name} mt-[20px] font-bold flex justify-center`}>About</h1>
                <div className='flex mt-[20px] font-normal justify-center'>
                  <div className='mt-[10px] flex flex-col justify-center items-center'>
                    <div className='flex'>
                      <img src={Weight} alt='WeightIcon' className='mr-[10px]'/>
                      <p>5,0 Kg</p>
                    </div>
                    <p className='text-[12px]'>Weight</p>
                  </div>
                  <div className='mx-[20px]' style={{ height: '60px',borderWidth: 1, borderColor: 'gray', borderStyle: 'solid' }}></div>
                  <div className='mt-[10px] flex flex-col justify-center items-center'>
                    <div className='flex'>
                      <img src={Height} alt='HeightIcon' className='mr-[10px]'/>
                      <p >1,0 m</p>
                    </div>
                    <p className='text-[12px]'>Height</p>
                  </div>
                  <div className='mx-[20px]' style={{ height: '60px',  borderRadius: 1, borderWidth: 1, borderColor: 'gray', borderStyle: 'solid' }}></div>
                  <div className='mt-[10px] flex flex-col justify-end items-center'>
                    <div className='flex flex-col capitalize'>
                      <p>{pokeDetail.moves && pokeDetail?.moves[0]?.move?.name.replace('-',' ')}</p>
                      <p>{pokeDetail.moves && pokeDetail?.moves[1]?.move?.name}</p>
                      
                    </div>
                    <p className='text-[12px]'>Moves</p>
                  </div>
                </div>
                <p className='ml-[20px] mr-[20px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis libero eu ante maximus accumsan. Pellentesque gravida ex ut velit gravida luctus.</p>
                <h1 className={`text${pokeDetail.types[0].type.name} font-bold mt-[20px] flex justify-center`}>Base Stats</h1>
                <div className='flex ml-[20px] mt-[20px]'>
                  <div className={`text${pokeDetail.types[0].type.name} text-center font-bold`}>
                    <p>HP</p>
                    <p>ATK</p>
                    <p>DEF</p>
                    <p>SATK</p>
                    <p>SDEF</p>
                    <p>SPD</p>
                  </div>
                  <div className='mx-[20px]' style={{ height: '150px',  borderRadius: 1, borderWidth: 1, borderColor: 'gray', borderStyle: 'solid' }}></div>
                  <div className='w-full pr-[20px] mb-[50px]'>
                    <div className='flex items-center'>
                      <p>045</p>
                      <div className={`ml-[20px] w-[15%] h-[5px] rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                      <div className={`w-[85%] h-[5px] opacity-20 rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                    </div>
                    <div className='flex items-center'>
                      <p>049</p>
                      <div className={`ml-[20px] w-[20%] h-[5px] rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                      <div className={`w-[80%] h-[5px] opacity-20 rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                    </div>
                    <div className='flex items-center'>
                      <p>049</p>
                      <div className={`ml-[20px] w-[20%] h-[5px] rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                      <div className={`w-[80%] h-[5px] opacity-20 rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                    </div>
                    <div className='flex items-center'>
                      <p>065</p>
                      <div className={`ml-[20px] w-[35%] h-[5px] rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                      <div className={`w-[65%] h-[5px] opacity-20 rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                    </div>
                    <div className='flex items-center'>
                      <p>065</p>
                      <div className={`ml-[20px] w-[35%] h-[5px] rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                      <div className={`w-[65%] h-[5px] opacity-20 rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                    </div>
                    <div className='flex items-center'>
                      <p>045</p>
                      <div className={`ml-[20px] w-[15%] h-[5px] rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                      <div className={`w-[85%] h-[5px] opacity-20 rounded-lg ${pokeDetail.types[0].type.name}`}></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        
      
      )
    }

export default Card