"use client";
import ArtModal from '@/components/commonComponents/ArtModal';
import React from 'react';
import { useGetFavorite } from '@/app/hooks/useGetData';
import Error from '../../../components/commonComponents/Error';
import SkeletonStructure from '../../../components/commonComponents/SkeletonStructure';

interface Artwork {
  id: string;
  image_id: string;
  title: string;
  artist_title: string;
  api_link: string;
  thumbnail?: { alt_text?: string };
  short_description: string;
  description: string;
  gallery_title: string;
  subject_titles: string;
  alt_image_ids?: string[];
}

const FavoriteList: React.FC = () => {
  const { favorites, loading, error } = useGetFavorite();

  if (loading) {
    return <SkeletonStructure/>
  }
  if (error) {
    return <Error/>;
  }
  if (!favorites || favorites.length === 0) {
    return <p className="text-gray-500 text-center m-auto col-span-3">No se encontraron obras de arte.</p>;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {favorites.map((artwork: Artwork) => (
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
          loading={loading}
          alt_image_ids={artwork.alt_image_ids ?? []}
        />
      ))}
    </section>
  );
};

export default FavoriteList;