import React from 'react'
import {Link} from 'react-router-dom'

const index = () => {
  return (
    <div>
      <Link to='/Pokedex'>
        <div  className='flex flex-col justify-center items-center w-full h-screen bg-[#ffca2a] text-black'>
          <img className='md:w-[40%]' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png' />
          <p className='text-center mb-15 mt-20 font-bold text-2xl md:text-5xl'>Click to continue</p>
          <img className='md:w-[20%]' src="https://media.giphy.com/media/xQMYEokueU2Ww16p8I/giphy.gif" alt='gif'/>
        </div>
      </Link>
    </div>
  )
}

export default index