import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
const Information = () => {
  return (
    <section className='px-[30px] grid justify-center w-full items-center py-[100px] bg-blue-100'>
      <div className='max-w-[900px]'>
        <div className='grid max-w-[310px] gap-[20px] xsm:max-w-[550px] cs:max-w-[700px] lg:max-w-[900px] lg:grid-cols-2'>
          <div className=''>
            <h4 className='flex  items-center my-4 text-xl text-blue-600 font-montserrat font-semibold uppercase'>
              <AiFillCaretRight className="text-orange-400" />
              <p>Rapido y seguro</p>
            </h4>
            <h3 className='text-2xl mb-4 font-semibold font-montserrat'>Toda tu informacion en un solo lugar</h3>
            <p className='text-slate-500 text-md  font-poppins'>Tendras acceso a toda tu informacion de tu negocio en un solo lugar de manera segura y rapida como lo son tus ingresos,ventas, productos y mas desde tu aplicacion web.</p>
          </div>

          <div className='py-5'>
            <h4 className='my-4 flex items-center text-xl text-blue-600 font-montserrat font-semibold uppercase'>
              <AiFillCaretRight className="text-orange-400" />
              <p>
                Ahorra en costos de equipos
              </p>
            </h4>
            <h3 className='text-2xl mb-4 font-semibold font-montserrat'>No necesitas un kit de punto de venta sofisticado</h3>
            <p className='text-slate-500 text-md font-poppins'>Solo necesitas un pistola de codigo de barra y un dispositivo movil(tableta o celular) o computadora.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information