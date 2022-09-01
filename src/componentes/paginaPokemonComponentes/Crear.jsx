import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import MovimientosCheckbox from '../inicioComponentes/MovimientosCheckbox';
import TiposCheckbox from '../inicioComponentes/TiposCheckbox';



function Crear(updatedCheckedState) {
    const [arraydeTipos, setarraydeTipos] = useState([])
    const [arraydeMovimientos, setarraydeMovimientos] = useState([])
    const [state, setState] = useState({
        nombre: "",
        imagen: "",
        peso:"",
        altura:"",
        descripcion:"",
        hp:"",
        atk:"",
        def:"",
        satk:"",
        sdef:"",
        spd:""

    })
    let history = useNavigate()

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = async (e) => {
        const payload = {
            pokemons: {
                nombre: state.nombre,
                imagen: state.imagen,
                peso: state.peso,
                altura: state.altura,
                descripcion: state.descripcion,
                hp: state.hp,
                atk: state.atk,
                def: state.def,
                satk: state.satk,
                sdef: state.sdef,
                spd: state.spd,
            },
            habilidades: [{id: state.habilidades}],
            tipo : arraydeTipos
        }
        const resp = await fetch('http://localhost:4000/pokemons/createpokemon', { method: 'POST', mode: 'cors', headers: {'Accept': 'application/json', 'Content-Type': 'application/json' } , body: JSON.stringify(payload) })
        .then((res) =>  res.json())
        .then(console.log('query', res.json))
        .catch ((er) => {
            return er
        })
    }
    console.log(arraydeTipos)
    return (
    
        <div className="w-full h-[100vh] bg-cover bg-center bg-[url(https://play-lh.googleusercontent.com/2ezyZkgstCopdmXm13A0LKX8sKO9OAtUcU-ftpedY0rD9IDepQB9HOOSxyBhLTq01L8)] flex flex-col items-center">
            <div className='w-full h-full flex items-center'>
                <form className="w-3/6 justify-center items-center flex">
                    <div>
                        <div>
                        <div className="form-group text-left w-full items-center flex flex-col  ">
                        <p htmlFor="exampleInputEmail" className=' text-white'>Nombre</p>
                        <div className=''>
                            <input type="nombre"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="nombre" 
                                    placeholder="" 
                                    value={state.nombre}
                                    onChange={handleChange}
                                    />
                        </div>
                        <p htmlFor="exampleInputEmail" className=' text-white'>url imagen</p>
                        <input type="imagen"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="imagen" 
                                    placeholder="" 
                                    value={state.imagen}
                                    onChange={handleChange}
                                    />
                        <p htmlFor="exampleInputEmail" className=' text-white'>peso</p>
                        <input type="peso"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="peso" 
                                    placeholder="" 
                                    value={state.peso}
                                    onChange={handleChange}
                                    />
                        <p htmlFor="exampleInputEmail" className=' text-white'>altura</p>
                        <input type="altura"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="altura" 
                                    placeholder="" 
                                    value={state.altura}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>Descripcion</p>
                        <input type="descripcion"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="descripcion" 
                                    placeholder="" 
                                    value={state.descripcion}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>HP</p>
                        <input type="hp"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="hp" 
                                    placeholder="" 
                                    value={state.hp}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>ATK</p>
                        <input type="atk"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="atk" 
                                    placeholder="" 
                                    value={state.atk}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>DEF</p>
                        <input type="def"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="def" 
                                    placeholder="" 
                                    value={state.def}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>SATK</p>
                        <input type="satk"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="satk" 
                                    placeholder="" 
                                    value={state.stak}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>SDEF</p>
                        <input type="sdef"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="sdef" 
                                    placeholder="" 
                                    value={state.sdef}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>SPD</p>
                        <input type="spd"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="spd" 
                                    placeholder="" 
                                    value={state.spd}
                                    onChange={handleChange}
                                    />

                                        
                          </div>
                    
                    </div>
                    <div className="form-group text-left flex flex-col font-bold">
                    </div>
                    <div className="form-check">
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary bg-blue-500 rounded-sm w-[5rem] lg:w-[13rem]"
                        onClick={handleSubmitClick}
                    >Add pokemon</button>
                    </div>
                </form>
                <div className='w-full flex justify-center align-middle '>
                                    <p className=' text-white'>TIPO</p>
                                    <div className=''>
                                        <TiposCheckbox arraydeTipos = {arraydeTipos}
                                        setarraydeTipos = {setarraydeTipos}/>
                                    </div>
                                    <p className=' text-white'>MOVIMIENTOS</p>
                                    <div>
                                    <MovimientosCheckbox  arraydeMovimientos = {arraydeMovimientos}
                                        setarraydeMovimientos = {setarraydeMovimientos} />
                                        </div>
                                        </div>
            </div>
    
            <div className="alert alert-success" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            </div>
    )
}

export default Crear

