import Image from 'next/image'
import React from 'react'
import sidebarMobile from '../assets/sidebar-mobile-collection.jpg'
import responsiveDesign from '../assets/responsive-design.jpg'
const ShowProduct = () => {
  return (
    <section className='px-[30px] grid justify-center w-full items-center py-[30px] bg-white'>
      <div className='max-w-[310px] grid gap-10 xsm:max-w-[550px] cs:max-w-[700px] lg:max-w-[800px]'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div className='xm:w-[300px] grid m-auto'>

          <Image
            src={sidebarMobile}
            // width={200}
            // height={200}
            alt="sidebar mobile"
            priority
            placeholder="blur"
            layout="responsive"
          />
          </div>
          <div className='grid place-content-center'>
            <p className='text-slate-500 font-poppins'>
              Podras navegar por todas las secciones de la aplicacion de manera rapida y fluida gracias al navegador vertical que a la vez puedes ocultarlo para tener toda la pantalla completa y tengas todo el panorama de tu trabajo.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4  lg:grid-cols-2'>
          <div className='xm:w-[300px] grid m-auto'>
        <Image
            src={responsiveDesign}
            // width={300}
            // height={400}
            alt="sidebar mobile"
            priority
            placeholder="blur"
            layout="responsive"
          />

          </div>
          <div className='grid place-content-center'>
            <p className='text-slate-500 font-poppins'>
              Usa la aplicacion en cualquier momento y lugar, solo necesitas un dispositvo android, ios o window y conexion a internet. 
            </p>
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default ShowProduct