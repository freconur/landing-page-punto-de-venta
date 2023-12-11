import React from 'react'
import { RiCheckboxCircleFill, RiWhatsappLine } from "react-icons/ri";
import { BiMedal } from "react-icons/bi";
const Pricing = () => {
  return (
    <section id="pricing" className='bg-gradient-to-r from-gd1 from-10% via-gd2 via-90% to-gd3 to-95% py-[60px] px-5'>
      <div className='flex justify-center items-center text-white mb-5'>
        <BiMedal className="w-[40px] h-[40px]" />
        <p className='text-center font-poppins font-semibold text-5xl'>
          Membresia
        </p>

      </div>
      {/* <div className='m-auto grid grid-cols-1 place-content-center xs:grid-cols-3 md:gap-[100px] md:w-[650px] px-[20px] xsm:px-[40px] xs:px-[20px] gap-1 '> */}
      <div className='m-auto grid grid-cols-1 place-content-center sm:grid-cols-2 lg:gap-[20px] lg:grid-cols-3  gap-[20px] lg:w-[950px]'>
        <div className='md:w-[300px] m-auto bg-white shadow-lg rounded-lg p-3'>
          <h3 className='text-2xl tracking-wide font-poppins text-indigo-400 text-center font-semibold uppercase'>Emprendedor</h3>
          <h3 className='text-2xl tracking-wide font-poppins text-indigo-400 text-center font-semibold uppercase'>junior</h3>
          <div className='mb-[20px] mt-[10px]'>
            <h3 className='font-montserrat font-bold text-center text-blue-300 text-[40px]'>S/ 15.00</h3>
            <p className='text-slate-300 text-center w-full'>soles / mes</p>
          </div>
          <ul className='text-md text-slate-400'>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Disponible 1 punto de venta</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Emite comprobantes de venta a clientes</p>
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
              <p className='ml-2'>Soporte tecnico 24/7.</p>
            </li>
          </ul>
          <div className='cursor-pointer w-full flex justify-center items-center gap-2 rounded-md bg-indigo-400 mt-3 h-[40px] font-nunito capitalize text-white font-semibold'>
          <a className='w-full h-full flex justify-center items-center' href="https://wa.me/51982752688?text=hola, estoy interesado en la aplicación de punto de venta mypos, quisiera informacion sobre la suscripción emprendedor junior" target="_blank"><p>suscribirme</p> <RiWhatsappLine className="text-2xl" /></a>
          </div>
        </div>
        <div className='md:w-[300px] m-auto bg-white shadow-lg rounded-lg p-3'>
          <h3 className='text-2xl tracking-wide font-poppins text-green-400 text-center font-semibold uppercase'>Emprendedor</h3>
          <h3 className='text-2xl tracking-wide font-poppins text-green-400 text-center font-semibold uppercase'>Formal</h3>
          <div className='mb-[20px] mt-[10px]'>
            <h3 className='font-montserrat font-bold text-center text-blue-300 text-[40px]'>S/ 20.00</h3>
            <p className='text-slate-300 text-center w-full'>soles / mes</p>
          </div>
          <ul className='text-md text-slate-400'>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Disponible 1 punto de venta</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Emite comprobantes de venta a tus clientes</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Emite boletas y facturas electronicas</p>
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
              <p className='ml-2'>Soporte tecnico 24/7.</p>
            </li>
          </ul>
          <div className='cursor-pointer w-full flex justify-center items-center gap-2 rounded-md bg-green-500 mt-3 h-[40px] font-nunito capitalize text-white font-semibold'>
          <a className='w-full h-full flex justify-center items-center' href="https://wa.me/51982752688?text=hola, estoy interesado en la aplicación de punto de venta mypos, quisiera informacion sobre la suscripción emprendedor formal" target="_blank"><p>suscribirme</p> <RiWhatsappLine className="text-2xl" /></a>
          </div>
        </div>
        <div className='md:w-[300px] bg-white m-auto shadow-lg rounded-lg p-3'>
          <h3 className='text-2xl tracking-wide font-poppins text-gold text-center font-semibold uppercase'>emprendedor</h3>
          <h3 className='text-2xl tracking-wide font-poppins text-gold text-center font-semibold uppercase'>senior</h3>
          <div className='mb-[20px] mt-[10px]'>
            <h3 className='font-montserrat text-center font-bold text-blue-300 text-[40px]'>S/ 25.00</h3>
            <p className='text-slate-300 text-center w-full'>soles / mes</p>
          </div>
          <ul className='text-md text-slate-400'>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Disponible hasta 3 puntos de ventas</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Emite boletas y facturas electronicas</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Emite comprobantes de venta a tus clientes</p>
            </li>
            <li className='item-center flex my-2'>
              <div className='w-[20px] h-[20px]'>
                <RiCheckboxCircleFill className=" text-[20px] text-blue-300" />
              </div>
              <p className='ml-2'>Actualizaciones y mejoras en las funcionalidades de la aplicacion web</p>
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
              <p className='ml-2'>Soporte tecnico 24/7.</p>
            </li>
          </ul>
          <div className='cursor-pointer w-full flex justify-center items-center gap-2 rounded-md bg-gold mt-3 h-[40px] font-nunito capitalize text-white font-semibold'>
            <a className='w-full h-full flex justify-center items-center' href="https://wa.me/51982752688?text=hola, estoy interesado en la aplicación de punto de venta mypos, quisiera informacion sobre la suscripción emprendedor senior" target="_blank"><p>suscribirme</p> <RiWhatsappLine className="text-2xl" /></a>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing