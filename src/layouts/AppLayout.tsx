import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AppLayout = () => {
  return (
    <div className=' flex h-[100vh]'>
        <>
        <Header/>
        </>
        <div className='mt-[15vh] w-full'>

        <Outlet/>
        </div>
    </div>
  )
}

export default AppLayout