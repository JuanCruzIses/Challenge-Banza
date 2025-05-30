import { useEffect, useState } from 'react';
import { FetchApi, FetchDetail } from '../helpers/FetchApi';
import type { Artwork } from "../types/interface";

// Hook para obtener las obras
const useGetData = (numberPage: number) => {
  const [data, setData] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    FetchApi(numberPage)
      .then(result => {
        if (!isMounted) return;
        if (result.error) {
          setError('Error al obtener datos');
          setData([]);
        } else {
          setData(result.data ?? []); // Si obtengo undefined de la respuesta, asigno valor null para cumplir el tipado
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setError('Error al obtener datos');
        setData([]);
        setLoading(false);
      });
    return () => { isMounted = false; };
  }, [numberPage]);

  return { data, loading, error };
};

// Hook para obtener detalle de una obra
const useGetDetail = (url: string) => {
  const [data, setData] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    FetchDetail(url)
      .then(result => {
        if (!isMounted) return;
        if (result.error) {
          setError('Error al obtener datos');
          setData(null);
        } else {
          setData(result.data ?? null); // Si obtengo undefined de la respuesta, asigno valor null para cumplir el tipado
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setError('Error al obtener datos');
        setData(null);
        setLoading(false);
      });
    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
};


const useGetFavorite = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      } else {
        setFavorites([]);
        setLoading(false);
      }
    } catch (e) {
      setError('Error al obtener datos');
      setFavorites([]);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);
  return { favorites, loading, error };
}

export { useGetData, useGetDetail, useGetFavorite };