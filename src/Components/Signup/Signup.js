import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'    
import Navbar from './Navbar'
import axios from "axios";
import {useForm}  from  "react-hook-form";
import { useNavigate } from 'react-router-dom';

// const REGISTER_URL = "https://newblog-m4im.onrender.com/api/auth/register";


const Sign = () => {
const  {register,handleSubmit,formState:{errors},reset} = useForm({});
const navigate= useNavigate();

  
  

  const  onSubmit = async (data) => {
    try {
  const response = await  axios.post("https://newblog-m4im.onrender.com/api/auth/signup", data);
    console.log(response);
    navigate('/Dashhome');
    } catch (error) {
      console.log(error.response);
    }
  }
     return (
    <>
     {/* {success ?(
      <div className="success-msg">
        <h1>success</h1>
        <p><Link to="/login">Login</Link></p>
      </div>
     ) : ( */}
    <div >
      <Navbar />
       <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Welcome to our blog</h3>
        <p>Please enter your details</p>
        <div className="form-control">
        <label>User name</label>
        <input 
               type="text" 
               id="username"
               name='username'
               {...register("username")}
               placeholder="username"
               />
        </div>
        <div className="form-control">
        <label>Email</label>
        <input type="text" 
        id="email"
        name='email'
        {...register("email")}
        placeholder="email"
        />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input 
        type="password" 
        name='password'
        {...register("password")}
        id="password"
        placeholder="password"
        />
      </div>
      <button type="submit"
      className="btn-register"
      >Sign up</button>
      <p>U have an account? <Link to='/Login' style={{color: 'inherit', textDecoration: 'inherit'}}><span>Login</span></Link> </p>
    </form>
    </div>
    {/* )} */}
  </>
    )

}

export default Sign