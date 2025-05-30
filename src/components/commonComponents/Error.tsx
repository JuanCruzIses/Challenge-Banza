import Image from 'next/image'
import React from 'react'

const Error: React.FC = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <Image src={"/not_avaible.png"} width={120} height={120} alt='Error'/>
        <h2>Ocurrio un error</h2>
        <p>Prueba recargar la pagina</p>
    </div>
  )
}

export default Error