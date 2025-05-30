import type { Artwork } from "../types/interface";

export interface ApiResponse<T> {
  data?: T;
  error?: string | any;
}

const FetchApi = async (numberPage: number): Promise<ApiResponse<Artwork[]>> => {
  const url = `https://api.artic.edu/api/v1/artworks?page=${numberPage}&limit=24`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    return {data: data.data};
  }
  catch (error) {
    return {error: error}
  }
}

const FetchDetail = async (url: string): Promise<ApiResponse<Artwork>> => {
   try{
    const response = await fetch(url);
    const data = await response.json();
    return {data: data.data};
  }
  catch (error) {
    return {error: error}
  }
}

export {FetchApi, FetchDetail}