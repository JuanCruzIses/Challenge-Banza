"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import UseGetImages from '@/app/hooks/useGetImage'
import SingleSkeleton from '../commonComponents/SingleSkeleton';

interface ImageListProps {
  idImage: string;
  alt: string;
  styles: string | boolean;
  loading: boolean;
}

interface ImageResponse {
  url?: string;
  error?: string;
}

const ImageList: React.FC<ImageListProps> = ({ idImage, alt, styles = false, loading }) => {
  const [loadingImage, setLoadingImage] = React.useState(loading);
  const [src, setSrc] = React.useState<string | undefined>(undefined);
  const res = UseGetImages(idImage) as ImageResponse | null;

  useEffect(() => {
    if (res && res.url) {
      setSrc(res.url);
      setLoadingImage(false)
    } else if (res && res.error) {
      setSrc("/not_avaible.png");
    }
  }, [res]);

  if (res == null) {
    return (
      <>
      <Image
        src="/not_avaible.png"
        width={160}
        height={160}
        alt={alt}
        className={`${!styles ? "object-contain h-full w-full" : styles}`}
        unoptimized
        />
        </>
    );
  }
  if (src === undefined) return <SingleSkeleton />;

  return (
    <Image
      src={src}
      width={160}
      height={160}
      alt={alt}
      className={`${!styles ? "object-contain h-full w-full" : styles}`}
      onLoad={() => setLoadingImage(false)}
      onError={() => {
        if (src !== "/not_avaible.png") setSrc("/not_avaible.png");
      }}
      style={{ display: loadingImage ? 'none' : 'block' }}
      unoptimized
    />
  );
}

export default ImageList