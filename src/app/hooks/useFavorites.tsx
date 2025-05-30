import { useEffect, useState } from 'react'
import type { ArtworkDetail } from "../types/interface";

//Hook para guardar o eliminar una obra de session (favoritos)
const useFavorites = (image_id: string, artworkDetail: ArtworkDetail) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const validId = image_id && image_id !== "null" ? image_id : artworkDetail?.title;

  const checkIsFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((fav: any) =>
      (fav.id && fav.id !== "null" && fav.id === image_id) ||
      (!fav.id && fav.title && fav.title === artworkDetail?.title) ||
      (fav.id === artworkDetail?.title) 
    );
  };

  useEffect(() => {
    setIsFavorite(checkIsFavorite());
  }, [image_id, artworkDetail?.title]);

  const handleClick = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter((fav: any) =>
      !(
        (fav.id && fav.id !== "null" && fav.id === image_id) ||
        (!fav.id && fav.title && fav.title === artworkDetail?.title) ||
        (fav.id === artworkDetail?.title)
      )
    );
    if (!isFavorite) {
      favorites.push({ ...artworkDetail, id: validId });
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, handleClick }
}

export default useFavorites