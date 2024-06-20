import React from 'react'
import logo from '../assets/msulogo2.png';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../services/authSlice';
import { useLogoutMutation } from '../services/authApi';


function Header() {
    const dispatch = useDispatch()
    const  { user } = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const [logoutServer, {isLoading}] = useLogoutMutation()

    const handleLogout = () => {
        logoutServer().unwrap()
        dispatch(logout())
        navigate('/login')
    }
  return (
    <div>
      <header class="text-slate-700 bg-white shadow-sm container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
    <span class="mr-2 w-8">
      <img src={logo} alt="" />
    </span>
    HRM
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li class="lg:mr-12"><Link class="rounded text-slate-700 text-lg font-semibold transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" to={'/vacancies'}>Vacancies</Link></li>
      
    </ul>
    <hr class="mt-4 w-full lg:hidden" />
    {user ? (
        <>
        <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
      <button onClick={handleLogout} title="" class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"> Log Out </button>
    </div>
        </>
    ) : (
        <>
        <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
      <Link to={'/login'} title="" class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"> Log in </Link>
      <Link to={'/register'} title="" class="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600">Get Started</Link>
    </div>
        </>
    )}
    
  </nav>
</header>

    </div>
  )
}

export default Header