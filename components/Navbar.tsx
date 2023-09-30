import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between h-[72px] bg-navbar shadow-sm'>
      <div className='capitalize flex justify-center items-center text-2xl font-sidebar  text-white px-2'>Tech Solutions</div>
        <ul className='hidden h-[60px] justify-center items-center text-slate-600 font-nunito pr-2 text-xl capitalize'>
          <li className='hover:bg-slate-200 duration-300 cursor-pointer h-[60px] flex justify-center items-center px-[30px]'>
            contactanos
          </li>
          <li className='hover:bg-slate-200 duration-300 cursor-pointer h-[60px] flex justify-center items-center px-[30px]'>
            precios
          </li>
          <li className='hover:bg-slate-200 duration-300 cursor-pointer h-[60px] flex justify-center items-center px-[30px]'>
            beneficios
          </li>
        </ul>
    </div>
  )
}

export default Navbar