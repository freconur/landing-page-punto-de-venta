import React from 'react'
import { GrEmoji } from "react-icons/gr";
const Beneficios = () => {
  return (
    <section className='px-[30px] grid justify-center w-full items-center py-[30px] bg-white'>
      <div className='max-w-[900px]'>
        <h2 className='text-2xl font-semibold font-montserrat uppercase text-blue-400 text-left max-w-[900px]'>Que beneficios tendras con nuestra aplicion de punto de venta?</h2>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 py-10 text-slate-500 text-lg font-poppins'>
          <ul className=''>
            <li className='py-3  flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>
                Podras ver en tiempo real las ventas e ingresos de tu negocio desde cualquier dispositivo movil(celular) o escritorio(PC) con acceso a tu aplicacion.
              </p>
            </li>
            <li className='py-3  flex'>
              <div className='w-[30px] h-[30px] pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>
                Controlaras tus inventarios e ingresos.
              </p>
            </li>

            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>Mejoraras la productividad y la eficiencia en tu negocio.</p>

            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>Puedes tener 1 o mas puntos de ventas en un mismo local.</p>
            </li>
          </ul>
          <ul>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>
                solo necesitas una computadora o una tablet o puedes manejarlo desde tu propio celular con datos(internet).
              </p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>
                Aplicativo facil e intuitivo facil de usar con una buena experiencia de usuario.
              </p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>
                Contaras con una aplicacion con las mejores tecnologias
              </p>
            </li>
            <li className='py-3 flex'>
              <div className='w-[30px] h-[30px] mr-2 pt-1 text-blue-400'>
                <GrEmoji />
              </div>
              <p>
                Recibiras actualizaciones y mejoras a tu aplicacion web sin ningun costo.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Beneficios