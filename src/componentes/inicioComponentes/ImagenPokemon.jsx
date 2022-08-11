import React from 'react'

const ImagenPokemon = ({img}) => {
  return (
    <>
        <img
        className='w-[80px] h-[80px]'
            src={img}
            />
    </>
  )
}

export default ImagenPokemon