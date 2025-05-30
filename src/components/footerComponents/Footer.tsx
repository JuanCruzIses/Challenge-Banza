import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='h-[10vh] bg-black flex'>
        <Link 
        target='_blank' 
        className='m-auto' 
        href={"https://presentacionjc-juan-cruz-ises-projects.vercel.app/"}
        >
           <Image className='m-auto object-none' src="/brandImage.png" alt="imagen de marca" width={50} height={50}/>
        </Link>
    </footer>
  )
}

export default Footer