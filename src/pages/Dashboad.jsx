import React from 'react'
import logo from '../assets/msulogo2.png';
import { Link } from 'react-router-dom';
import Vacancies from './Vacancies';
import AdminAdverts from './AdminAdverts';
// import { Outlet } from 'react-router-dom'



function Dashboard() {
  return (
    <div>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />


<div class="bg-slate-200 flex h-screen">
  <aside class="fixed z-50 md:relative">
    <input type="checkbox" class="peer hidden" id="sidebar-open" />
    <label class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden" for="sidebar-open">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72">
    <div className="bg-slate-800 mt-5 py-4 pl-10 md:mt-10">
  <span className="">
    <img className="rounded-3xl shadow-lg h-32 w-32 text-white bg-white object-cover" src={logo} alt="logo image" />
  </span>
</div>
      <ul class="mt-8 space-y-3 md:mt-12">
        <li class="relative">
          <Link to={'/dashboard'} class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
            <span
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
             </span
            ><span class="">Dashboard</span>
          </Link>
          <svg class="text-slate-200 absolute -right-1 -top-1/2 z-10 hidden h-32 w-8 md:block" xmlns="http://www.w3.org/2000/svg" viewBox="399.349 57.696 100.163 402.081" width="1em" height="4em">
            <path fill="currentColor" d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z" />
          </svg>
        </li>
        <li class="relative">
          <Link to={''} class="focus:bg-slate-600 font-semibold hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

</span ><span class="">Create Advert</span>
          </Link>
        </li>
        <li class="relative">
          <Link to={''}class="focus:bg-slate-600 font-semibold hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
            <span class="text-2xl"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>
            </span
            ><span class="">Adverts</span>
          </Link>
        </li>
      </ul>

      <div class="my-6 mt-auto ml-10 flex align-middle cursor-pointer">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg>

        </div>
        <div class="ml-2">
          <p class="font-medium">Nicholas Chaibva</p>
        </div>
      </div>
    </nav>
  </aside>

  <div class="flex h-full w-full flex-col">
    {/* <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
      <div class="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
        <div class="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
          <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input type="name" name="search" class="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500" placeholder="" />
        </div>

        <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
          <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </li>
          
          <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header> */}

    <div class="h-full overflow-hidden pl-10">
      <main id="dashboard-main" class="h-[calc(120vh-10rem)] overflow-auto px-4 py-4">
        {/* <Outlet /> */}
        <AdminAdverts />
      </main>
    </div>
   
  </div>
</div>

    </div>
  )
}

export default Dashboard