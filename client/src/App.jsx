import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/Navbar'
import Results from './pages/Results'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/results' element ={<Results/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element ={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App