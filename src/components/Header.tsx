import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import { app } from "../utils/firebase";
import { useSelector } from "react-redux";

const auth = getAuth(app);


const Header = () => {

const isLoggedIn=useSelector((store)=>store.login)

  const logout = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
  <header className="h-[15vh] flex justify-between items-center fixed w-full rounded-b-sm shadow-lg">
    <img className="h-[13vh] w-18 rounded-xl px-4 py-1"
      src="https://i.pinimg.com/564x/be/15/b0/be15b04a2fa0d5873f882fbd7bfd705a.jpg" alt="logo"/>
 <nav className="mr-16">
  <NavLink to="/" className="px-4 py-1 font-medium text-lg text-gray-700 
    hover:font-bold transition hover:text-red-500">
    Home
  </NavLink>
  <NavLink to="/login" className="px-4 py-1 font-medium text-lg text-gray-700  hover:font-bold transition hover:text-red-500"
  onClick={logout}>
    Logout
  </NavLink>
 </nav>
  </header> 
  )
}

export default Header;
