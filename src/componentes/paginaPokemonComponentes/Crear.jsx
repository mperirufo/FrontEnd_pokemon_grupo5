import React from 'react'
import { useState } from "react"

function Crear() {
        const [state , setState] = useState({
            email : "",
            usuer : "",
            password : "",
            successMessage: null
        })
        const handleChange = (e) => {
            const {id , value} = e.target   
            setState(prevState => ({
                ...prevState,
                [id] : value
            }))
        }
    
        const handleSubmitClick = (e) => {
        e.preventDefault();
            const payload={
                "email":state.email,
                "password":state.password,
                }
            axios.post(API_BASE_URL+'/user/login', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Login successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        props.showError(null)
                    }
                    else if(response.code === 204){
                        props.showError("Username and password do not match");
                    }
                    else{
                        props.showError("Username does not exists");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        const redirectToHome = () => {
            props.updateTitle('Home')
            props.history.push('/home');
        }
        const redirectToRegister = () => {
            props.history.push('/register'); 
            props.updateTitle('Register');
        }
    return (
    
        <div className="w-full h-[100vh] bg-cover bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/projects/404/999058136965003.Y3JvcCw3NDcsNTg0LDI3MywyMg.jpg)] flex flex-col items-center">
            <div className='w-full h-full flex items-center'>
                <form className="w-3/4 justify-center items-center flex">
                    <div>
                        <div>
                        <div className="form-group text-left w-4/6 flex flex-col  ">
                        <p htmlFor="exampleInputEmail" className=' text-white'>Nombre del pokemon</p>
                        <div className=''>
                            <input type="email"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="email" 
                                    placeholder="" 
                                    value={state.nombre}
                                    onChange={handleChange}
                                    />
                        </div>
                        <p htmlFor="exampleInputEmail" className=' text-white'>url imagen pokemon</p>
                        <input type="email"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="email" 
                                    placeholder="" 
                                    value={state.imagen}
                                    onChange={handleChange}
                                    />
                        <p htmlFor="exampleInputEmail" className=' text-white'>peso</p>
                        <input type="email"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="email" 
                                    placeholder="" 
                                    value={state.peso}
                                    onChange={handleChange}
                                    />
                        <p htmlFor="exampleInputEmail" className=' text-white'>altura</p>
                        <input type="email"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="email" 
                                    placeholder="" 
                                    value={state.altura}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>Descripcion</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.descripcion}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>HP</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.hp}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>ATK</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.atk}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>DEF</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.def}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>SATK</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.stak}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>SDEF</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.sdef}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>SPD</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw]" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.spd}
                                    onChange={handleChange}
                                    />
                        <p className=' text-white'>TIPO</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw] mb-2" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.tipo}
                                    onChange={handleChange}
                                    />
                                                            <p className=' text-white'>TIPO 2</p>
                        <input type="usuer"
                                    className="form-control  opacity-90 font-light rounded-sm lg:w-[25vw] mb-2" 
                                    id="usuer" 
                                    placeholder="" 
                                    value={state.tipo2}
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
            </div>
    
            <div className="alert alert-success" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            </div>
    )
}

export default Crear

