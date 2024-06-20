import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Dashboad from './pages/Dashboad.jsx'
import Login from './pages/Login.jsx'
import Vacancies from './pages/Vacancies.jsx'
import VacancyDetails from './pages/VacancyDetails.jsx'
import ApplicationForm from './pages/ApplicationForm.jsx'
import CreateAdvert from './pages/CreateAdvert.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import AdminAdverts from './pages/AdminAdverts.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<Vacancies />}/>
      <Route path='' element={<ProtectedRoutes />} >
      </Route>
      <Route path='/dashboard' element={<Dashboad />}/>
      <Route path='/vacancies' element={<Vacancies />}/>
      <Route path='/admin-vacancies' element={<AdminAdverts />}/>
      <Route path='/vacancy-details/:id' element={<VacancyDetails />} />
      <Route path='/create-advert' element={<CreateAdvert />} />
      <Route path='/register' element={<Register />}/>
      <Route path='application-form/:id' element={<ApplicationForm />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/forgot-password' element={<ForgotPassword />}/>


    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
