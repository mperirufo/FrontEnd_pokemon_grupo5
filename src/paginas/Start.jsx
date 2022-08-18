import React from 'react';
import { Link } from 'react-router-dom';
import img from '../imagenes/pngegg.png'

const Start = () => {
  return (
    <>
      <Link to='/Inicio'>
      <div className="w-full h-[100vh] bg-cover bg-center bg-[url(https://images.alphacoders.com/581/thumb-1920-581224.jpg)] flex flex-col items-center">
          <img className='md:w-[600px] min-w-[300px] mt-[100px]' src={img} alt="" />
          <h1 className='text-white font-bold mt-8 md:text-4xl text-2xl shadow'>Welcome to Pokedex</h1>
      </div>
      </Link>
    </>
  )
}

export default Start