import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className='body-home'>
      
      <img src='./public/sanlam.jpeg' alt='Sanlam Logo' className='sanlam-logo' />
      <img src="./Sanlam.svg" alt="logo" />
      {/* <img src={Sanlam} alt="Sanlam" /> */}
      <div>
        <h1 className='home-title'>Welcome to Sanlam Rwanda</h1>
        </div>
      <div className='botton_section'>
      <button className="body-home_button"> 
      <h2 className='home_button-text'>
       <Link to="/Education"> Education</Link>
        </h2></button>
      <button className="body-home_button"> 
      <h2 className='home_button-text'>
        <Link to='/Retiements'>Retiements </Link>
        </h2> </button>
      <button className="body-home_button"> 
      <h2 className='home_button-text'>
        <Link to='/Funnela'>Funel and safe family policy</Link>
        </h2>
       </button>
      </div>
      <div> <button className='back-button'>
        <h2 className='back'>BACK</h2>
        </button>  </div>
    </div>
  )
}

export default Body