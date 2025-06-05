import React from 'react';
import useFavorites from '@/app/hooks/useFavorites';
import type { ArtworkDetail } from "@/app/types/interface";

interface FavoriteButtonProps {
  image_id: string;
  artworkDetail: ArtworkDetail;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ image_id, artworkDetail }) => {
  const { isFavorite, handleClick } = useFavorites(image_id, artworkDetail);

  return (
    <button
      onClick={handleClick}
      className={`
       cursor-pointer absolute top-3 right-3 z-5 rounded-full border-2 border-[#b48a5a] shadow-md p-1 flex items-center justify-center transition-colors duration-300
      ${isFavorite ?
          'bg-gradient-to-br from-[#f0b100] to-[#b48a5a] shadow-lg text-white'
          :
          'text-[#b48a5a] bg-[#f7f5f0] border border-[#b48a5a]'
        }
    `}>
      <span className={`material-symbols-outlined text-2xl rounded-full p-2`}>star</span>
    </button>
  );
};

export default FavoriteButton;