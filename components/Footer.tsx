import React from 'react'
import { FaRegRegistered } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full bg-footer h-[75px] flex justify-center items-center'>
      <div className=" text-white font-dmMono text-center grid place-content-center items-center justify-center">
        <div className='flex justify-center items-center'>
        <p className='flex'>FECH</p>
        <FaRegRegistered className="font-sm ml-2"/>
        <p className='font-sm ml-2'>2023</p>
        </div>
        <p>creado y diseñado por frecodev</p>
      </div>
    </div>
  )
}

export default Footer