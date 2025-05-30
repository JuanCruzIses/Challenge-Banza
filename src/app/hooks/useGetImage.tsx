import { useEffect, useState } from 'react';
import FetchApi from '../helpers/FetchImages';
import type { ImageResponse } from "../types/interface";

const useGetImages = (idImage: string): ImageResponse | null => {
  const [data, setData] = useState<ImageResponse | null>(null);

  useEffect(() => {
    const getData = async () => {
      const dataApi = await FetchApi(idImage);
      setData(dataApi.data as ImageResponse);
    };
    getData();
  }, [idImage]);
  return data;
};

export default useGetImages;