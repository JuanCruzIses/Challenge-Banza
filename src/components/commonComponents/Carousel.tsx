import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

interface Artwork {
  id: string | number;
  image_id: string | null;
  title: string;
  thumbnail?: { alt_text?: string };
}

interface CarouselImagesProps {
  data: Artwork[];
}


const CarouselImages: React.FC<CarouselImagesProps> = ({ data }) => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    data.length && setLoading(false)
  },[data])
  return (
    <div className="flex justify-center w-full relative my-5">
      <Carousel
        opts={{
          align: "center",
          loop: true
        }}
        className="w-full max-w-md md:max-w-2xl lg:max-w-[90vw] mx-auto relative"
      >
        <CarouselContent>
          {data.map((artwork: any) => (
            <CarouselItem
              key={artwork.id}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center items-center"
            >
              <div className="relative flex justify-center items-center">
                <div
                  className="rounded-[18px] shadow-lg bg-[#f8f4ec] border-4 border-[#5a3a1b] p-2 flex items-center justify-center aspect-square w-[260px] h-[260px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]"
                >
                  <Image
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                    width={260}
                    height={260}
                    alt={artwork.thumbnail?.alt_text || artwork.title || "Obra de arte"}
                    className="object-contain w-full h-full rounded-[12px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/not_avaible.png";
                    }}
                    loading="eager"
                    priority
                  />
                  <span className='absolute truncate px-2 font-bold bottom-0 bg-[#f8f4ec] w-full rounded-b-[12px] border-4 border-[#5a3a1b] border-t-0 text-center'>
                    {artwork.title}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-0 bg-[#f8f4ec] rounded-full shadow-md border-2 border-[#bfa16a] hover:bg-[#e6d3b3] w-10 h-10 flex items-center justify-center'/>
        <CarouselNext className='cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-0 bg-[#f8f4ec] rounded-full shadow-md border-2 border-[#bfa16a] hover:bg-[#e6d3b3] w-10 h-10 flex items-center justify-center'/>
      </Carousel>
    </div>
  );
};

export default CarouselImages;