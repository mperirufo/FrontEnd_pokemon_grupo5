import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './paginas/Start'
import Inicio from './paginas/Inicio'
import PaginaPokemon from './paginas/PaginaPokemon'
import PaginaLogin from './paginas/PaginaLogin';
import "@fontsource/poppins";
import PaginaRegister from './paginas/PaginaRegister';





function App() {


  return (
    <div className='w-full letra  m-auto h-full'>
   <BrowserRouter>
    <Routes>
      <Route 
       path='/'
       element={<Start 
       
       />}
      />
      <Route 
       path='/Inicio'
       element={<Inicio 
       
       />}
      />
      <Route 
       path='/PaginaPokemon/:id'
       element={<PaginaPokemon
       />}
       />
      <Route 
      path='/PaginaLogin'
      element={<PaginaLogin
      />}
      />
      <Route
      path='/PaginaRegister'
      element={<PaginaRegister
      />}
      />
    </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
