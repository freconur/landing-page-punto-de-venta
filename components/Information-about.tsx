import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { BiSupport, BiSolidCustomize } from "react-icons/bi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { IoAccessibility } from "react-icons/io5";
const InformationAbout = () => {
  return (
    // <section className='px-[30px] cz:px-[100px] xs:px-[50px] grid justify-center w-full items-center py-[30px] bg-white'>
    <section className='px-[30px] grid justify-center w-full items-center py-[30px] bg-white'>
      <div className='max-w-[310px] xsm:max-w-[550px] cs:max-w-[700px] lg:max-w-[800px]'>
        {/* <h2 className='text-4xl font-poppins text-slate-600 text-center max-w-[900px]'>Que beneficios tendras con nuestra aplicion de punto de venta?</h2> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='py-5'>
            <h4 className='flex  items-center my-4 text-xl font-bold font-montserrat uppercase'>
              <HiMiniDevicePhoneMobile className="text-blue-300 h-[35px] w-[35px] mr-2" />
              <p>Compatiblidad</p>
            </h4>
            <p className='text-slate-500 text-md font-poppins'>Nuestra aplicacion es compatible con todos los dispositivos de android, IOS y windows(11,10,7), gracias a la tecnologia con que fue desarrollado no tendras problemas de compatibilidad.</p>
          </div>
          <div className='py-5'>
            <h4 className='flex  items-center my-4 text-xl font-bold font-montserrat uppercase'>
              <IoAccessibility className="text-blue-300 h-[35px] w-[35px] mr-2" />
              <p>Accesibilidad</p>
            </h4>
            <p className='text-slate-500 text-md font-poppins'>Te sorprenderas lo facil e intuitivo que es aprender y usar esta herramienta, ya que tiene un diseño minimalista y agradable a la vista sin dejar de lado la experiencia de usuario cuando ejecutas tus tareas.</p>
          </div>
          <div className='py-5'>
            <h4 className='flex  items-center my-4 text-xl font-bold font-montserrat uppercase'>
              <BiSupport className="text-blue-300 h-[35px] w-[35px] mr-2" />
              <p>Soporte tecnico</p>
            </h4>
            <p className='text-slate-500 text-md font-poppins'>Queremos que tu experiencia con nuestra aplicacion de punto de venta sea la mejor, por eso estamos dispuestos ayudarte ante cualquier eventualidad que pueda ocurrir con la aplicacion, asi que estamos dispuestos a brindarte soporte tecnico 24/7 para que tu productividad nunca pare.</p>
          </div>

          <div className='py-5'>
            <h4 className='my-4 flex items-center text-xl font-montserrat font-semibold uppercase'>
              <BiSolidCustomize className="text-blue-300 h-[35px] w-[35px] mr-2"/>
              <p>
                Funcionalidades personzalidas
              </p>
            </h4>
            <p className='text-slate-500 text-md font-poppins'>Si en algun momento en la gestion de tu negocio necesitas mas funcionalidades de las que ya tienen nuestra aplicacion, pues no te preocupes, nosotros podemos desarrollar funcionalidades que tu necesites y que cubran tus necesidades.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InformationAbout