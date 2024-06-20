import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router'
import Dashboad from './pages/Dashboad'
import Register from './pages/Register'
import Header from './pages/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';



function App() {

  return (
    <>
    <div className='bg-gray-50'>
    <ToastContainer  />
    <Toaster
  position="top-center"
  reverseOrder={false}
/>

    <Header />
    
    <Outlet />
    </div>

    </>
  )
}

export default App
