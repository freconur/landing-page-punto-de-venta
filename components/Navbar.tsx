import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false)

  const handleShowBurger = () => {
    setShowBurger(!showBurger)
  }
  return (
    <div className=' flex justify-between h-[72px] bg-white  shadow-sm'>
      <div className='capitalize flex justify-center bg-navbar items-center text-4xl font-semibold font-comfortaa text-white px-2'>Mypos</div>
      {/* <ul className='h-full justify-center items-center text-white flex font-semibold font-nunito  text-xl capitalize'> */}
      <div onClick={handleShowBurger} className='md:hidden bg-navbar cursor-pointer fixed bottom-[30px] right-[30px] shadow-xl flex items-center justify-center rounded-full h-[45px] w-[45px]'>
        <GiHamburgerMenu className="text-2xl text-white"/>
      </div>
      {/* <div className={`fixed ${showBurger ? "left-0" : "left-[700px]"}`}> */}
        <ul className={`fixed ${showBurger ? "top-0 bottom-0 right-0 left-0" : "-left-[700px]"} md:hidden duration-300 bg-white text-navbar  flex flex-wrap md:flex-nowrap  text-[30px] md:text-[20px] font-semibold font-nunito  text-xl capitalize`}>
          <li onClick={handleShowBurger} className='hover:bg-slate-200 hover:text-navbar duration-300 cursor-pointer w-full md:h-full  flex justify-center items-center md:px-[30px]'>
            <a className='w-full h-full flex justify-center items-center' href="#contact">contactanos</a>
          </li>
          <li onClick={handleShowBurger} className='hover:bg-slate-200 hover:text-navbar duration-300 cursor-pointer w-full md:h-full  flex justify-center items-center md:px-[30px]'>
            <a className='w-full h-full flex justify-center items-center' href="#pricing">precios</a>
          </li>
          <li onClick={handleShowBurger} className='hover:bg-slate-200 hover:text-navbar duration-300 cursor-pointer w-full md:h-full  flex justify-center items-center md:px-[30px]'>
            <a className='w-full h-full flex justify-center items-center' href="#beneficios">beneficios</a>
          </li>
        </ul>
      {/* </div> */}

      <ul className= {`hidden md:flex bg-white text-navbar top-0 bottom-0 right-0 left-0 text-[30px] md:text-[20px] font-semibold font-nunito  text-xl capitalize`}>
        <li className='hover:bg-slate-200 hover:text-navbar duration-300 cursor-pointer w-full md:h-full  flex justify-center items-center md:px-[30px]'>
          <a className='w-full h-full flex justify-center items-center' href="#contact">contactanos</a>
        </li>
        <li className='hover:bg-slate-200 hover:text-navbar duration-300 cursor-pointer w-full md:h-full  flex justify-center items-center md:px-[30px]'>
          <a className='w-full h-full flex justify-center items-center' href="#pricing">precios</a>
        </li>
        <li className='hover:bg-slate-200 hover:text-navbar duration-300 cursor-pointer w-full md:h-full  flex justify-center items-center md:px-[30px]'>
          <a className='w-full h-full flex justify-center items-center' href="#beneficios">beneficios</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar