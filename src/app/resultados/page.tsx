"use client";
import React from "react";
import { useSearchResults } from "@/context/SearchResultsContext";
import Image from "next/image";
import Link from "next/link";

const ResultadosPage = () => {
    const { results } = useSearchResults();
    console.log(results)
    const artworkDetail = {
        // id: results.id
    }
    
    const storage = () => {
        sessionStorage.setItem('artworkDetail', JSON.stringify(artworkDetail));
    }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resultados de la búsqueda</h1>
      {results && results.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {results.map((artwork: any, idx: number) => (
            <li
              key={artwork.id || idx}
              className="w-[100%] grid relative lg:flex flex-col items-center text-center bg-[#f7f5f0] p-4 rounded-[32px_8px_32px_8px] border-8 border-[#5a3a1b] shadow-xl sm:w-[75%] md:w-[85%] lg:w-full mx-auto mb-8 h-[500px] justify-center lg:justify-between"
              style={{ boxShadow: '0 8px 32px 0 rgba(90,58,27,0.25), 0 1.5px 0 0 #3e2610' }}
            >
            <Link
              href={`/detail/${artwork.id}`}
              onClick={() => storage()}
              className="w-full mb-4 rounded-[24px_6px_24px_6px] overflow-hidden shadow-md h-[180px] flex items-center justify-center"
            >
              {artwork.image_id ? (
                <Image
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                  alt={artwork.thumbnail?.alt_text || artwork.title || "Obra de arte"}
                  width={240}
                  height={200}
                  className="rounded-[24px_6px_24px_6px] mb-4 object-cover bg-[#e7e1d6] shadow-md h-[180px] w-full flex items-center justify-center"
                  placeholder={artwork.thumbnail?.lqip ? "blur" : undefined}
                  blurDataURL={artwork.thumbnail?.lqip}
                />
              ) : artwork.thumbnail?.lqip ? (
                <Image
                  src={artwork.thumbnail.lqip}
                  alt={artwork.thumbnail?.alt_text || "Imagen no disponible"}
                  width={240}
                  height={200}
                  className="rounded-[24px_6px_24px_6px] mb-4 object-cover bg-[#e7e1d6] shadow-md h-[180px] w-full flex items-center justify-center"
                />
              ) : (
                <Image
                  src="/not_avaible.png"
                  alt="Imagen no disponible"
                  width={240}
                  height={200}
                  className="rounded-[24px_6px_24px_6px] mb-4 object-cover bg-[#e7e1d6] shadow-md h-[180px] w-full flex items-center justify-center"
                />
              )}
              </Link>
              <div className="flex flex-col justify-around h-[220px] w-full">
                <h2 className="h-auto font-bold text-[#3e2610] mb-1 drop-shadow-sm w-full flex justify-center overflow-auto lg:max-h-[100px] text-lg md:text-xl">
                  {artwork.title}
                </h2>
                <p className="h-auto flex-col text-[0.95em] text-md text-[#7a5c3a] font-semibold mb-2 flex items-center justify-center overflow-hidden text-ellipsis w-full">
                  Artista: <span className="text-[0.95em] font-normal text-[#3e2610] ml-1">{artwork.artist_title || "Desconocido"}</span>
                </p>
                <p className="text-md text-[#7a5c3a] text-[0.95em] font-semibold mb-2 h-[24px] flex items-center justify-center">Descripción:</p>
                <p className="overflow-y-auto text-sm text-[#3e2610] bg-[#f0e6d6] rounded-lg px-3 py-2 shadow-inner max-h-[80px] w-full">
                  {artwork.thumbnail?.alt_text ? artwork.thumbnail.alt_text : "No disponible"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Image
            className="rounded-2xl mb-6"
            src="/error-image.png"
            width={240}
            height={200}
            alt="Ilustración de error: página no encontrada"
            priority
          />
          <h1 className="text-3xl font-bold mb-2 ">No se encontraron resultados</h1>
          <p className="mb-6 ">No hay obras que coincidan con tu búsqueda.</p>
          <Link
            href="/"
            className="bg-[#bfa16a] hover:bg-[#a88a4a] font-semibold py-2 px-6 rounded transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResultadosPage;
