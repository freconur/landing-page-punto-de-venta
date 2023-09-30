import React from 'react'
import { RiCheckboxCircleFill, RiWhatsappLine } from "react-icons/ri";
import { BiMedal } from "react-icons/bi";
const Pricing = () => {
  return (
    <section className='bg-gradient-to-r from-gd1 from-10% via-gd2 via-90% to-gd3 to-95% py-[60px] px-5'>
      <div className='flex justify-center items-center text-white mb-5'>
        <BiMedal className="w-[40px] h-[40px]"/>
        <p className='text-center font-poppins font-semibold text-5xl'>
          Membresia
          </p>

      </div>
      <div className='m-auto grid grid-cols-1 place-content-center xs:grid-cols-2 md:gap-[100px] md:w-[650px] px-[20px] xsm:px-[40px] xs:px-[20px] gap-4 '>
        <div className='md:w-[300px] m-auto bg-white shadow-lg rounded-lg p-3'>
          <h3 className='text-2xl tracking-wide font-poppins text-green-400 text-center font-semibold uppercase'>Suscripción </h3>
          <h3 className='text-2xl tracking-wide font-poppins text-green-400 text-center font-semibold uppercase'> mensual</h3>
          <div className='mb-[20px] mt-[10px]'>
          <h3 className='font-montserrat font-bold text-center text-blue-300 text-[40px]'>S/ 29.90</h3>
          <p className='text-slate-300 text-center w-full'>soles / mes</p>
          </div>
          <ul className='text-md text-slate-400'>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Actualizacion y mejoras en las funcionalidades de la aplicacion web.</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Agrega funcionalidades personalizadas segun tus necesidades.</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Adiciona nuevas funcionalidad a tu aplicativo web</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Soporte tecnico 24/7.</p>
            </li>
          </ul>
          <div className='cursor-pointer w-full flex justify-center items-center gap-2 rounded-md bg-green-500 mt-3 h-[40px] font-nunito capitalize text-white font-semibold'>
            <p>suscribirme</p>
          <RiWhatsappLine className="text-2xl"/>
          </div>
        </div>
        <div className='md:w-[300px] bg-white m-auto shadow-lg rounded-lg p-3'>
          <h3 className='text-2xl tracking-wide font-poppins text-gold text-center font-semibold uppercase'>Suscripción </h3>
          <h3 className='text-2xl tracking-wide font-poppins text-gold text-center font-semibold uppercase'>semestral</h3>
          <div className='mb-[20px] mt-[10px]'>
          <h3 className='font-montserrat text-center font-bold text-blue-300 text-[40px]'>S/ 149.50</h3>
          <p className='text-slate-300 text-center w-full'>soles / 6 meses</p>
          </div>
          <ul className='text-md text-slate-400'>
          <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Ahorra un mes con tu suscripcion semestral.</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Actualizacion y mejoras en las funcionalidades de la aplicacion web.</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Agrega funcionalidades personalizadas segun tus necesidades.</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Adiciona nuevas funcionalidad a tu aplicativo web</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
              <RiCheckboxCircleFill className=" text-[20px] text-blue-300" /> 
              </div>
              <p className='ml-2'>Soporte tecnico 24/7.</p>
            </li>
          </ul>
          <div className='cursor-pointer w-full flex justify-center items-center gap-2 rounded-md bg-gold mt-3 h-[40px] font-nunito capitalize text-white font-semibold'>
            <p>suscribirme</p>
          <RiWhatsappLine className="text-2xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing