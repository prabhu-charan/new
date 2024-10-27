import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ItemPage from './pages/ItemPage'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import About from './pages/about'
import Contact from './pages/contact'
import MyItems from './pages/MyItems'
import Order from './pages/order'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%'>
      <Navbar />
      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='/item' element ={<ItemPage/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/my-profile' element ={<MyProfile/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/my-item' element ={<MyItems/>} />
        <Route path='/order' element ={<Order/>} />
      </Routes>

    </div>
  )
}

export default App