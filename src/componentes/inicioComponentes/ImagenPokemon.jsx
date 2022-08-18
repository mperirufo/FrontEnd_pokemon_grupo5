import React from 'react'

const ImagenPokemon = ({img}) => {
  console.log('img', img)
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