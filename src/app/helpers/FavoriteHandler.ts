import { FavoriteArtwork } from "../types/interface";

export const favoriteHandler = (
  imageId: string | null | undefined,
  artworkDetail: FavoriteArtwork
): void => {  
    const favorites: FavoriteArtwork[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.findIndex(favorite => favorite.id === imageId);

    if (index === -1) {
        favorites.push(artworkDetail);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};