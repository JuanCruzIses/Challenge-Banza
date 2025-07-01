"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import type { Artwork } from "../types/interface";
import { FetchApi } from "../helpers/FetchApi";

interface ArtworksContextType {
  artworks: Artwork[];
  setArtworks: (artworks: Artwork[]) => void;
  loading: boolean;
  error: string | null;
  setNumberPage: (page: number) => void;
  numberPage: number;
}

const ArtworksContext = createContext<ArtworksContextType | undefined>(undefined);

export const ArtworksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [numberPage, setNumberPage] = useState<number>(1);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    FetchApi(numberPage)
      .then(result => {
        if (!isMounted) return;
        if (result.error) {
          setError('Error al obtener datos');
          setArtworks([]);
        } else {
          setArtworks(result.data ?? []);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setError('Error al obtener datos');
        setArtworks([]);
        setLoading(false);
      });
    return () => { isMounted = false; };
  }, [numberPage]);

    return (
    <ArtworksContext.Provider
      value={{
        artworks,
        setArtworks,
        loading,
        error,
        numberPage,
        setNumberPage, // Pasar el setter directamente
      }}
    >
      {children}
    </ArtworksContext.Provider>
  );
};

export const useArtworks = () => {
  const context = useContext(ArtworksContext);
  if (!context) throw new Error("useArtworks debe usarse dentro de ArtworksProvider");
  return context;
};