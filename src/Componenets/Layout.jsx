import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
const Layout = () => {
  document.body.style.backgroundColor= 'rgb(1, 10, 26'
  return (
    <>
    <div className='bg-slate-900'>
      <Navbar />
      <Outlet />
      <Toaster/>
    </div>
    </>
  )
}

export default Layout
