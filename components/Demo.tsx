import React from 'react'

const Demo = () => {
  return (
    <section className='px-[30px] grid justify-center w-full items-center py-[30px] bg-blue-50'>
      <div className='max-w-[900px]'>
        <div className='grid gap-5 py-10 text-slate-500 text-lg font-poppins'>
          <p>
            Si aun no te hemos convencido de lo genial que es MyPOS para tu negocio, entonces permitenos darte una demostracion de la aplicacion, donde podrás probar de manera personal y directa su funcionalidad, solo contactanos dando click en el boton de abajo, estamos seguros que sera una gran experiencia.</p>
          <button className='w-full rounded-sm p-2 bg-green-500 text-white hover:bg-green-400 duration-300'>Solicitar demo</button>
        </div>

      </div>
    </section>
  )
}

export default Demo