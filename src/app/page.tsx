"use client"
import React from "react";
import CarouselImages from "@/components/commonComponents/Carousel";
import ArtworkList from "../components/indexComponents/ArtworkList";
import SkeletonStructure from "@/components/commonComponents/SkeletonStructure";
import Error from "@/components/commonComponents/Error";
import { useArtworks } from "./store/ArtworksContext";

function Home() {
  const { artworks, loading, error, setNumberPage, numberPage } = useArtworks();

  if (loading) return <SkeletonStructure />;
  if (error) return <Error />;
  if (!artworks || artworks.length === 0) return <div className="text-center py-8"><h2>No hay datos para mostrar.</h2></div>;
  
  return (
    <>
      <h1 className="text-3xl py-6 md:py-8 lg:py-12 text-center font-bold underline">¡Bienvenido!</h1>
      <CarouselImages data={artworks} />
      <div className="grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen p-8 pb-14 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <h2 className="font-bold underline">Obras de arte</h2>
          <p>
            Explore miles de obras de arte de la colección del museo, desde nuestros íconos más famosos hasta obras menos conocidas de todos los rincones del mundo, así como nuestros libros, escritos, materiales de referencia y otros recursos.
          </p>
        </div>
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <ArtworkList
            data={artworks}
            loading={loading}
            error={error}
            setNumberPage={setNumberPage}
            numberPage={numberPage}
          />
        </div>
      </div>
    </>
  );
}

export default React.memo(Home);