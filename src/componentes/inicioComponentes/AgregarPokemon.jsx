import React from 'react'
import { Link} from 'react-router-dom'



 /* const { state } = useLocation(); */
 /* const { tkn } = state; */
 const token = localStorage.getItem('token')

function AgregarPokemon(props) {
  console.log('token', 'token')
  return (
    <Link to='/CrearPokemon'>
  <div>
    <div className={`flex flex-col w-[110px] m-[5px] my-2 justify-between h-[140px]  bg-white rounded-lg border-2`}>
      <div className='w-full h-full flex'>
        <div className='flex flex-col w-full h-full justify-center '>
        <i className='fa-solid fa-circle-plus flex w-full h-full justify-center items-center text-4xl' />
        </div>
      </div>
    <div className='flex items-center justify-end flex-col w-full h-2/4 text-center font-bold'>
      Agregar Pokemon
    </div>
    </div>
  </div>
  </Link>
  )
}

export default AgregarPokemon