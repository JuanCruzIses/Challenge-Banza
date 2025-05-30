import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f0ece4] px-4">
      <div className="bg-[#f0e6d6] rounded-2xl p-10 flex flex-col items-center w-full max-w-xl shadow-lg border-[8px] border-solid border-[#5a3a1b] my-5">
        <Image
          className="rounded-2xl mb-6"
          src="/error-image.png"
          width={240}
          height={200}
          alt="Ilustración de error: página no encontrada"
          priority
        />
        <h1 className="text-3xl font-bold mb-2 ">Página no encontrada</h1>
        <p className="mb-6 ">La página que buscas no existe o fue removida.</p>
        <Link
          href="/"
          className="bg-[#bfa16a] hover:bg-[#a88a4a] font-semibold py-2 px-6 rounded transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;