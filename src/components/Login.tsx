import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getAuth } from 'firebase/auth';

import {app} from '../utils/firebase';

import { checkValidateData } from '../utils/validate';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const [signInStatus, setSignInStatus] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("saisumanth")

  const navigate=useNavigate()

    const handleButtonClick=()=>{
      console.log(email,password)
        const result=checkValidateData(
            email,password,userName
        )
        setErrorMessage(result)
        console.log(result)

        if (result) return;
        if(result===null && !signInStatus){
          createUserWithEmailAndPassword(
            auth,
            email,
            password
          )
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
    
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode + " " + errorMessage);
              setErrorMessage(errorMessage);
              // ..
            });
        }
        else {
          //signIn logic
          signInWithEmailAndPassword(
            auth,
            email,
            password
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/")

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
            });
        }
    }

    const onSubmitForm = (e) =>{
        e.preventDefault()
    }

  return (
    <div className='w-full'>
      <div className='bg-gray-100 w-[40%] min-h-[60vh] p-10 m-auto my-10 rounded-lg'>
        <form className='w-[80%] mx-auto' onSubmit={onSubmitForm}>
          <h1 className='text-xl font-semibold mb-4'>{signInStatus ? "Sign In" : "Sign Up"}</h1>
          {
            !signInStatus && ( 
                 <input
                type='text'
                placeholder='Username'
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                className='w-full mb-4 p-4 border border-gray-300 rounded  focus:outline-none focus:ring-1 focus:ring-red-400'
              />)
          }
          <input
            type='text'
            placeholder='Email or mobile number'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full mb-4 p-4 border border-gray-300 rounded  focus:outline-none focus:ring-1 focus:ring-red-400'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className=' w-full mb-3 p-4 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-400'
          />
           <p className="text-red-600 font-bold text-lg p-2 mb-2">{errorMessage}</p>
          <button className='w-full border border-black px-8 py-2 active:outline-none  active:border-red-400'
          onClick={handleButtonClick}
          >
            {signInStatus ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer mt-3 active:text-red-400">
          {signInStatus ? (
            <span
              onClick={() => {
                setSignInStatus((prevSign) => setSignInStatus(!prevSign));
              }}
            >
              New to Netflix? Sign Up Now
            </span>
          ) : (
            <span
              className="cursor-pointer active:text-red-400"
              onClick={() => {
                setSignInStatus((prevSign) => setSignInStatus(!prevSign));
              }}
            >
              Already a user? Sign In Now
            </span>
          )}
        </p>
        </form>
      </div>    
    </div>
  );    
};

export default Login;
