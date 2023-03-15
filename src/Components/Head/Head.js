import React from 'react'
import './Head.css'

const Head = () => {
  return (
    <div className='header'>
        <div className='header-left'>
        <image src='/public/logo512.png' alt='Sanlam Logo' className='sanlam-logo' />
        </div>
        <div className='header-right'>
        <a href='#' className='header-title'>Our Products</a>
        <a href='#' className='header-title'>Customer care</a>
        <a href='#' className='header-title'>About us</a>
        <a href='#' className='header-title'>Contact us</a>
        </div>
    </div>
  )
}

export default Head