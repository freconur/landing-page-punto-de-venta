import React from 'react'
import { BsFillCheckSquareFill } from "react-icons/bs";

const QueNecesito = () => {
  return (
    <section className='px-[30px] grid justify-center w-full items-center py-[30px] bg-white'>
      <div className='max-w-[900px]'>
        <h2 className='text-3xl font-semibold font-poppins  text-blue-400 text-center max-w-[900px]'>Que necesito para usar la aplicacion de MyPOS?</h2>
        <div className='grid gap-5 py-10 text-slate-500 text-lg font-poppins'>
          <p>Para poder usar la aplicacion MyPOS necesitaras 3 cosas:</p>
          <ul>
            <li className='py-3  flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Necesitaras un lector de codigo de barras tambien conocido como pistola de codigo de barra, esto es para poder leer el codigo de barra de cada producto que tienen impresos.
              </p>
            </li>
            <li className='py-3  flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Necesitaras una conexion a internet.
              </p>
            </li>
            <li className='py-3  flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-green-400'>
                <BsFillCheckSquareFill />
              </div>
              <p>
                Y por ultimo pero no menos importante, necesitaras una subscripcion mensual o semestral que te permitira tener acceso a todas las funcionalidad mencionadas anteriormente.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default QueNecesito