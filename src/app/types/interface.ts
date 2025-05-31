// FavoriteHandler.ts
export interface FavoriteArtwork {
  id?: string | null;
  title: string;
  [key: string]: any;
}

// ArtworkList.tsx, page.tsx, useGetData.tsx, FetchApi.ts
export interface Artwork {
  id: string;
  image_id: string;
  title: string;
  artist_title: string;
  api_link: string;
  thumbnail?: {
    alt_text?: string;
  };
  short_description: string;
  description: string;
  gallery_title: string;
  subject_titles: string;
  alt_image_ids: string[];
}

// FetchApi.ts
export interface ApiResponse<T> {
  data?: T;
  error?: string | any;
}

// useGetImage.tsx
export interface ImageResponse {
  url?: string;
  error?: string;
}
// useFavorites.tsx
export interface ArtworkDetail {
  id?: string;
  title: string;
  [key: string]: any;
}

// detail/page.tsx
export interface ArtworkDetailType {
  id: number | string | null;
  image_id: string | null;
  alt: string;
  title: string;
  artist: string;
  description?: string;
  subject_titles?: string[];
}