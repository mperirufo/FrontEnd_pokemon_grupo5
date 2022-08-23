import React from 'react'
import './Logincss.css';
import { useEffect, useState } from "react"




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
      return(
          <div className="bg-amber-400 w-full h-full flex">
              <form className="w-2/4 bg-slate-50 justify-center items-center flex flex-col">
                  <div>
                  <div className="form-group text-left w-2/4 flex flex-col">
                   <label htmlFor="exampleInputEmail1">Email address</label>
                   <input type="email" 
                         className="form-control" 
                         id="email" 
                         aria-describedby="emailHelp" 
                         placeholder="Enter email" 
                         value={state.email}
                         onChange={handleChange}
                        />
                   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group text-left">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" 
                         className="form-control" 
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
                      className="btn btn-primary"
                      onClick={handleSubmitClick}
                  >Submit</button>
                  </div>
              </form>
              <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                  {state.successMessage}
              </div>
              <div className="registerMessage">
                  <span>Dont have an account? </span>
                  <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
              </div>
          </div>
      )
  }
export default LoginForm
