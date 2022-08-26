import React from 'react'
import './Logincss.css';
import { useState } from "react"
import { Link } from 'react-router-dom';

    function LoginForm(props) {
    const [state , setState] = useState({
        email : "",
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
        fetch('http://localhost:4001/auth/login',{method:'POST', mode:'cors', body:payload})
        .then((res) => {
            console.log(JSON.stringify(res.json()))
        })
    }


    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(
        <div className="w-full h-[100vh] bg-cover bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/projects/404/999058136965003.Y3JvcCw3NDcsNTg0LDI3MywyMg.jpg)] flex flex-col items-center">
        <div className='w-full h-full flex items-center'>
            <form className="w-3/4 justify-center items-center flex flex-col">
                <div>
                <div className="form-group text-left w-4/6 flex flex-col mb-2 ">
                    <p htmlFor="exampleInputEmail" className='mb-2 text-white'>User</p>
                <div className='mb-2'>
                    <input type="email"
                            className="form-control mb-2 opacity-90 font-light rounded-sm lg:w-[25vw]" 
                            id="usuer" 
                            placeholder="Enter usuer" 
                            value={state.usuer}
                            onChange={handleChange}
                            />
                </div>
                </div>
                <div className="form-group text-left flex flex-col font-bold mb-2">
                <label htmlFor="exampleInputPassword" className='mb-2 text-white'>Password</label>
                <input type="password" 
                        className="form-control font-light w-4/6 rounded-sm lg:w-[25vw] mb-5" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary bg-blue-500 rounded-sm w-[5rem] lg:w-[13rem]"
                    onClick={() => handleSubmitClick()}                                                    
                >Login</button>
                </div>
            </form>
        </div>

        <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
            {state.successMessage}
        </div>
        <div className="registerMessage text-lg text-white pb-5">
            <span>Dont have an account? </span>
            <Link to='/PaginaRegister'>
    <span className="loginText font-bold" onClick={() => redirectToRegister()}>Register</span> 
            </Link>
    </div>
        </div>
    )
}
export default LoginForm
