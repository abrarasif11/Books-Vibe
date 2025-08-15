import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
