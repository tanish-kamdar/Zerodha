import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import newUserSchema from "../schemas/newUser";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../features/userSlice'
// Reusing Icon Components from the Login example for consistency
export const KiteLogo = () => (
  <img src={logo} alt="Kite Logo" className="h-10 w-auto" />
);

export const EyeIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export const GooglePlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21.53,10.74l-3.23-3.23a1,1,0,0,0-1.42,0l-1.41,1.41,4.24,4.24,1.82-1.82A1,1,0,0,0,21.53,10.74Z" />
    <path d="M2.34,3.76,8.23,9.65l-4.24,4.24L2.2,12.1a1,1,0,0,1,0-1.41Z" />
    <path d="M10,21.66,3.76,15.42,2,17.18a1,1,0,0,0,0,1.41l1.82,1.82L8.58,25.2a1,1,0,0,0,1.42,0Z" />
    <path d="M12.1,2.2,3.76,10.54l1.77,1.77,8.34-8.34L12.1,2.2a1,1,0,0,0-1.41,0Z" />
    <path d="M13.88,10l-4.24,4.24,5.9,5.89,4.24-4.24Z" />
  </svg>
);

export const AppleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.78 1.249 1.608 2.122 1.626s1.232-.276 2.02-.366c.787-.09 1.597-.166 2.517.085.828.232 1.65.909 2.117 1.834.17.339.293.617.448.913a2.5 2.5 0 0 0 .114.167.5.5 0 0 0 .732-.012l.004-.004a.5.5 0 0 0 .012-.732c-.052-.08-.153-.255-.262-.437a3.426 3.426 0 0 0-.435-.693z" />
    <path d="M4.225 6.425a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0z" />
  </svg>
);

// --- The Main Signup Component ---

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate=useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver : zodResolver(newUserSchema)
  });
  const user=useSelector((state)=> state.user);
    useEffect(()=>{
      console.log(user);
    },[user]);
  const dispatch=useDispatch();
  const onSubmit = async (data) => {
    try{
    let res=await axios.post('http://localhost:3001/user/signup',data,{withCredentials: true});
    console.log(res.data);
    if(res.data.success){
      dispatch(login({
        user: res.data.user,
        accessToken : res.data.accessToken
      }))
      navigate('/');
    }
    }catch(err){
      console.log(err);
      setError('root',{
        type: 'Invalid Input',
        message: err.response.data.error
      });
    }
  };
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="w-full max-w-sm">
        {/* Main Signup Card */}
        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200">
          <div className="flex flex-col items-center gap-y-6">
            <KiteLogo />
            <h1 className="text-2xl font-light text-gray-600">
              Signup for Kite
            </h1>

            <form
              className="w-full space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition duration-200 text-sm"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition duration-200 text-sm"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition duration-200 text-sm"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition duration-200 text-sm"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400 hover:text-gray-600"
                  aria-label="Toggle password visibility"
                >
                  <EyeIcon />
                </span>
              </div>
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition duration-200 text-sm"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400 hover:text-gray-600"
                  aria-label="Toggle confirm password visibility"
                >
                  <EyeIcon />
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff5722] text-white py-3 rounded-md hover:bg-[#e64a19] transition duration-200 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting.." : "Signup"}
              </button>
              {errors.root && (
                <p className="text-red-500 my-1">{errors.root.message}</p>
              )}
            </form>

            <Link
              to="/login"
              className="text-sm text-gray-500 hover:text-[#ff5722]"
            >
              Already have an account? Login here.
            </Link>
          </div>
        </div>

        {/* App Store & Zerodha Branding */}
        <div className="text-center mt-6 space-y-4">
          <div className="flex justify-center items-center space-x-5 text-gray-500">
            <a href="#" className="hover:text-gray-800 transition-colors">
              <GooglePlayIcon />
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              <AppleIcon />
            </a>
          </div>
          <div>
            <p className="text-gray-400 tracking-[0.25em] text-sm font-light">
              ZERODHA
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-4">
          <div className="text-xs text-gray-400 leading-relaxed px-2">
            <p>
              Zerodha Broking Limited: Member of NSE, BSE - SEBI Reg. no.
              INZ000031633, CDSL - SEBI Reg. no. IN-DP-431-2019 |
              <a href="#" className="text-gray-500 hover:text-[#ff5722] mx-1">
                Smart Online Dispute Resolution
              </a>{" "}
              |
              <a href="#" className="text-gray-500 hover:text-[#ff5722] mx-1">
                SEBI SCORES
              </a>
            </p>
            <p className="mt-4">v3.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
