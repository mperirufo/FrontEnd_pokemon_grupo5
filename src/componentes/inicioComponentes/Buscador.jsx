import React from 'react'

const Buscador = (props) => {


  return (
    
    <>
        <input 
        placeholder='Buscar'
        className='w-[370px] h-[25px] flex border-2 border-[#E0E0E0] ml-2  my-4 justify-center text-center rounded-lg'
        type="text" 
        onChange={(e) => props.onChange (e.target.value) }
        />
    </>
  )
}

export default Buscador