import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'

const Demo = () => {
  return (
    <section className='px-[30px] grid justify-center w-full items-center py-[30px] bg-blue-50'>
      <div className='max-w-[900px]'>
        <div className='grid gap-5 py-10 text-slate-500 text-lg font-poppins'>
          <p>
            Si aun no te hemos convencido de lo genial que es MyPOS para tu negocio, entonces permitenos darte una demostracion de la aplicacion, donde podrás probar de manera personal y directa su funcionalidad, solo contactanos dando click en el boton de abajo, estamos seguros que sera una gran experiencia.</p>
          <div className='mt-3 p-3 border-[1px] border-green-400 text-green-400 hover:text-white hover:duration-300 hover:bg-green-400 duration-300 capitalize rounded-md shadow-sm font-semibold cursor-pointer w-full'>
          <a className='w-full h-full flex justify-center items-center' href="https://wa.me/51982752688?text=hola, estoy interesado en la aplicación de punto de venta mypos, quisiera probar una demo de la aplicacion." target="_blank"><p className="mr-2">solicitar demo</p> <RiWhatsappLine className="text-2xl" /></a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Demo