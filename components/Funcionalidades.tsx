import React from 'react'
import { BsFillCheckSquareFill } from "react-icons/bs";
const Funcionalidades = () => {
  return (
    <section className='px-[30px] grid justify-center w-full items-center py-[30px] bg-white'>
      <div className='max-w-[900px]'>
        <h2 className='text-3xl font-semibold font-poppins  text-blue-400 text-center max-w-[900px]'>Que puedes hacer con la aplicacion MyPOS?</h2>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 py-10 text-slate-500 text-lg font-poppins'>
          <ul className=''>
            <li className='py-3  flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Registra los productos de tu negocio.
              </p>
            </li>
            <li className='py-3  flex'>
              <div className='w-[30px] h-[30px] pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Añade cargas de stock cada vez que compres mercaderia.
              </p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>Elimina productos que ya no vendas y actualiza los precios y cualquier dato de tus productos que ya hayan sido registrados.</p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>Realiza ventas de tus productos a tus clientes de manera fácil y rápido.</p>
            </li>
          </ul>
          <ul>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Genera anulación de venta cuando un cliente devuleve un producto.
              </p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Acceso a la lista de tus productos que estan por agotarse.
              </p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Acceso a tu lista de productos vendidos en el dia.
              </p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Acceso a la informacion general de ingresos, ticket, estadisticas y ratios segun tus ventas generadas.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Funcionalidades