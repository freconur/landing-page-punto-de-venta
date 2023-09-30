import React from 'react'
import { RiCheckboxCircleFill, RiWhatsappLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Maps = () => {
  return (
    <div className='w-full bg-gradient-to-r from-gd6 from-10% via-gd5 via-50% to-gd7 to-90%'>
      <h3 className='text-3xl text-white font-semibold capitalize font-poppins text-center py-[30px]'>Ubicanos</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.745319710823!2d-70.1154097709438!3d-15.482807792912418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f33a510ceb4d%3A0x513479db1ab4c863!2swaliky%20store%20juliaca!5e0!3m2!1ses!2spe!4v1696041873182!5m2!1ses!2spe" width="100%" height="350" loading="lazy"></iframe>
      <div className='bg-location w-full font-montserrat py-[20px]'>
        <div className='flex gap-2 text-lg text-white justify-center items-center'>
          <div className='text-center m-auto py-5'>
            <div className='flex justify-center items-center'>
              <HiOutlineLocationMarker />
              <p>ubicacion: </p>
            </div>
            <p>Nos encontramos a una cuadra de la avenida Tambopata con jiron conima.</p>
          </div>
        </div>
        <div className='flex gap-2 text-lg text-white justify-center items-center py-5'>
          <RiWhatsappLine />
          <p>whatsapp: 982 752 688</p>
        </div>
        <div className='flex gap-2 text-lg text-white justify-center items-center py-5'>
          <BiLogoGmail />
          <p>gmail: frecodev.1992@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Maps