"use client";
import React from 'react';
import ButtonsArtworkList from './ButtonsArtworkList';
import ArtModal from '../commonComponents/ArtModal';
import { Artwork } from '@/app/types/interface';

interface ArtworkListProps {
  data: Artwork[];
  loading: boolean;
  error: string | null;
  setNumberPage: React.Dispatch<React.SetStateAction<number>>;
  numberPage: number;
}

const ArtworkList: React.FC<ArtworkListProps> = ({
  data,
  loading,
  error,
  setNumberPage,
  numberPage,
}) => {
  if (loading) {
    return <p className="text-gray-500 text-center col-span-full">Cargando obras de arte...</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center col-span-full">Error: {error}</p>;
  }
  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-center col-span-full">No se encontraron obras de arte.</p>;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {data.map((artwork) => (
        <ArtModal
          key={artwork.id}
          id={artwork.id}
          image_id={artwork.image_id}
          title={artwork.title}
          artist_title={artwork.artist_title}
          api_link={artwork.api_link}
          alt={artwork.thumbnail}
          short_description={artwork.short_description}
          description={artwork.description}
          gallery_title={artwork.gallery_title}
          subject_titles={artwork.subject_titles}
          alt_image_ids={artwork.alt_image_ids}
        />
      ))}
      <div className="col-span-full text-center mt-4">
        <p className="text-sm text-gray-500">Página {numberPage}</p>
      </div>
      <ButtonsArtworkList setNumberPage={setNumberPage} numberPage={numberPage} />
    </section>
  );
};

export default ArtworkList;