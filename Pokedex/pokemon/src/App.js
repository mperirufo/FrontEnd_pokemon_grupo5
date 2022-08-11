import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Pokedex from './pages/Pokedex';
import Card from './pages/Card';
import "@fontsource/poppins";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
        />

        <Route 
          path='/Pokedex'
          element={<Pokedex/>}
        />

        <Route 
          path='/Card/:id'
          element={<Card/>}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
