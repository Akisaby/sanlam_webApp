import React from 'react'
import Welcome from './Welcome '
import Education from './Education'
import Retiements from './Retiements'
import Funnela from './Funnela'
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
        <Route path="/" element={<Welcome />} />
        <Route path="education" element={<Education/>} />
        <Route path="retiements" element={<Retiements/>} />
        <Route path="funnela" element={<Funnela/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
