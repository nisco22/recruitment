import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/msulogo2.png';
import { setCredentials } from '../services/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRegisterMutation } from '../services/authApi';
import { toast } from 'react-toastify';
import AuthLoadingSpinner from '../components/AuthLoadingSpinner';
// import toast, { Toaster } from 'react-hot-toast';


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirm] = useState("")

    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const [register, {isLoading, isError}] = useRegisterMutation()

    useEffect(()=>{
      if(user){
        navigate('/dashboard')
      }
    }, [navigate, user])

   

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = { name, email, password, password_confirmation };
      console.log(formData);
    
      // // Password validation function
      // const isValidPassword = (password) => {
      //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      //   return passwordRegex.test(password);
      // };
   
    
      // Check password requirements
      // if (!isValidPassword(password)) {
      //   toast.error("Password must be at least 8 characters, with at least one special character.");
      //   return;
      // }
      // Password validation function
      const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{7,}$/;
        return passwordRegex.test(password);
      };

      // Check password requirements
      if (!isValidPassword(password)) {
        toast.error("Password must be at least 7 characters, with at least one special character.");
        return;
      }

    
      // if (password !== password_confirmation) {
      //   toast.error("Passwords do not match");
      //   return;
      // }
    
      try {
        const res = await register(formData).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/dashboard');
        toast.success("Registration success");
      } catch (err) {
        if (err?.data?.errors) {
          err.data.errors.forEach((error) => {
            if (error.includes("password")) {
              toast.error("Passwords do not match");
            } else if (error.includes("name")) {
              toast.error("The name has already been taken");
            }else if (error.includes("email")) {
              toast.error("Invalid Email");
            }
             else {
              toast.error(error);
            }
          });
        } else {
          toast.error(err?.data?.message || err.error);
        }
      }
    };


  return (
    <div className='bg-white'>
    <div className="font-[sans-serif] text-[#333]">
   <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
     <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
       <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
       <form className="space-y-6" onSubmit={handleSubmit} action="">
       <div className="mb-12">
             <h3 className="text-3xl text-center text-blue-700 font-extrabold">Register</h3>
             <p className="text-sm mt-4">Sign up to our platform and explore new job opportunities.</p>              
             
           </div>
        <div className=''>
        {/* <label className="text-sm mb-2 block">Username</label> */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder=""
            className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
            onChange={(e) => setName(e.target.value)}
            required
          /><label for="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-blue-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 font-semibold peer-focus:px-2 peer-focus:text-blue-600"> Username </label>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                 <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                 <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
               </svg>
          </div>
        </div>

        <div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder=""
            className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
            onChange={(e) => setEmail(e.target.value)}
            required
          /><label for="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-blue-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 font-semibold peer-focus:px-2 peer-focus:text-blue-600"> Email </label>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                 <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                 <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
               </svg>
          </div>
        </div>
        <div>
        <div className="relative flex items-center">
          <input
            type="password"
            placeholder=""
            className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
            onChange={(e) => setPassword(e.target.value)}
            required
          /><label for="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-blue-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 font-semibold peer-focus:px-2 peer-focus:text-blue-600"> Password </label>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                 <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
               </svg>
          </div>
        </div>
        <div>
        <div className="relative flex items-center">
          <input
            type="password_confirmation"
            placeholder=""
            className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          /><label for="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-blue-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 font-semibold peer-focus:px-2 peer-focus:text-blue-600"> Confirm Password </label>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                 <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
               </svg>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
             <div className="flex items-center">
               <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
               <label for="remember-me" className="ml-3 block text-sm">
                 Remember me
               </label>
             </div>
             </div>
        <div>
          <div>
          {isLoading && <AuthLoadingSpinner />}
          </div>
        <div className="mt-12">
             <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
               Sign Up
             </button>
           </div>
           <p className="text-sm !mt-10 text-center">Already have an account <Link to={"/login"} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Log in here</Link></p>
        </div>
        </form>
       </div>
       <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
         <img src="https://readymadeui.com/login-image.webp" className="w-full h-full object-cover" alt="Dining Experience" />
       </div>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Register