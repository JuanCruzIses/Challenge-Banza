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
  priority?: boolean;
}

interface ImageResponse {
  url?: string;
  error?: string;
}

const ImageList: React.FC<ImageListProps> = ({ idImage, alt, styles = false, loading, priority = false }) => {
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
        priority={priority}
      />
        </>
    );
  }
  if (src === undefined) return <SingleSkeleton />;

  return (
    // <Image
    //   src={`https://www.artic.edu/iiif/2/${idImage}/full/843,/0/default.jpg`}
    //   // src={`https://www.artic.edu/iiif/2/${idImage}/full/200,/0/default.jpg`}
    //   width={160}
    //   height={160}
    //   alt={alt}
    //   className={`${!styles ? "object-contain h-full w-full" : styles}`}
    //   onLoad={() => setLoadingImage(false)}
    //   onError={() => {
    //     if (src !== "/not_avaible.png") setSrc("/not_avaible.png");
    //   }}
    //   style={{ display: loadingImage ? 'none' : 'block' }}
    //   priority={priority}
    // />
    <Image
      src={`https://www.artic.edu/iiif/2/${idImage}/full/843,/0/default.jpg`}
      width={400}
      height={400}
      alt={alt || "Obra de arte"}
      className="object-contain h-[340px] w-full max-w-[400px] rounded-[24px_6px_24px_6px] shadow-lg border-4"
      loading="eager"
      priority
      unoptimized
    />
  );
}

export default ImageList