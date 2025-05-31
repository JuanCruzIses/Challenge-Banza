"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ArtworkDetailType } from "@/app/types/interface";
import { useArtworks } from "../../store/ArtworksContext";


export default function ArtworkDetail() {
  const [artworkDetail, setArtworkDetail] = useState<ArtworkDetailType | null>(null);
  // const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { artworks, loading, error, setNumberPage, numberPage } = useArtworks();
  const [arrayImages, setArrayImages] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("artworkDetail");
      if (stored) {
        const detail = JSON.parse(stored);
        setArtworkDetail(detail);
        // Buscar en artworks el objeto con el mismo title
        const found = artworks.find(a => a.title === detail.title);
        if (found && Array.isArray(found.alt_image_ids)) {
          setArrayImages(found.alt_image_ids);
        } else {
          setArrayImages([]);
        }
      }
    }
  }, [artworks]);
  console.log(arrayImages)

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  if (loading) return <p>Cargando detalle...</p>;
  if (!artworkDetail) return <p>No se encontró la obra.</p>;

  const showFallback = imageError || !artworkDetail.image_id;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f5f0] to-[#e9e3d7] py-10 px-2">
      <div className="relative w-full max-w-4xl bg-[#f7f5f0] rounded-[32px_8px_32px_8px] border-8 border-[#5a3a1b] shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="flex flex-col items-center w-full md:w-1/2 bg-[#f0e6d6] py-6 px-2">
          <div className="flex justify-center items-center w-full mb-4">
            {showFallback ? (
              <Image
                src="/not_avaible.png"
                width={400}
                height={400}
                alt="Imagen no disponible"
                className="object-contain h-[340px] w-full max-w-[400px] rounded-[24px_6px_24px_6px] shadow-lg border-4"
                priority
              />
            ) : (
              <Image
                src={`https://www.artic.edu/iiif/2/${artworkDetail.image_id}/full/843,/0/default.jpg`}
                width={400}
                height={400}
                alt={artworkDetail.alt || artworkDetail.title || "Obra de arte"}
                className="object-contain h-[340px] w-full max-w-[400px] rounded-[24px_6px_24px_6px] shadow-lg border-4"
                onError={handleImageError}
                loading="eager"
                priority
              />
            )}
          </div>
          {arrayImages.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center items-center w-full">
              {arrayImages.map((image, idx) => (
                <Image
                  key={image + idx}
                  src={`https://www.artic.edu/iiif/2/${image}/full/200,/0/default.jpg`}
                  width={70}
                  height={70}
                  alt={`Imagen complementaria ${idx + 1}`}
                  className="hover:scale rounded-lg border-2 border-[#bfa16a] shadow-sm object-cover transition-transform hover:scale-115 bg-[#f0e6d6]"
                />
              ))}
            </div>
          )}
          <div className="absolute top-4 right-4 z-20"></div>
        </div>
        <div className="flex flex-col justify-between p-8 w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#3e2610] mb-2 drop-shadow-sm">{artworkDetail.title}</h1>
          <p className="text-lg text-[#7a5c3a] italic mb-4">
            Artista: <span className="font-semibold text-[#3e2610]">{artworkDetail.artist}</span>
          </p>
          <div className="mb-4">
            <h2 className="text-md text-[#7a5c3a] font-semibold mb-2">Descripción:</h2>
            <div className="bg-[#f0e6d6] rounded-lg px-4 py-3 shadow-inner overflow-y-auto max-h-[160px] text-[#3e2610]">
              {artworkDetail.description || "No disponible"}
            </div>
          </div>
          <div className="grid gap-1 mt-4">
            <h2 className="text-md text-[#7a5c3a] font-semibold mb-2">Categorías</h2>
            <div className="grid gap-1 grid-cols-3">
              {Array.isArray(artworkDetail.subject_titles) && artworkDetail.subject_titles.length > 0 ? (
                artworkDetail.subject_titles.map((cat, idx) => (
                  <span
                    key={idx}
                    className="text-center bg-[#f0e6d6] text-[#3e2610] px-3 py-1 rounded-full text-xs font-semibold shadow"
                  >
                    {cat}
                  </span>
                ))
              ) : (
                <span className="text-[#b48a5a]">Sin categorías</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// export default ArtworkDetail;