import React from 'react'
import ImageComponent from '../commonComponents/ImageComponent'
import Link from 'next/link'
import FavoriteButton from '../../app/favorites/components/FavoriteButton'

interface ArtModalProps {
  id: string;
  image_id: string;
  title: string;
  artist_title: string;
  api_link: string;
  alt?: { alt_text?: string };
  short_description: string;
  description: string;
  gallery_title: string;
  subject_titles: string;
  loading?: boolean;
  alt_image_ids: string[]
}

const ArtModal: React.FC<ArtModalProps> = ({
  id,
  image_id,
  title,
  artist_title,
  api_link,
  alt = { alt_text: "No disponible" },
  short_description,
  description,
  gallery_title,
  subject_titles,
  loading = true,
  alt_image_ids
}) => {
    if (alt == null) {
        alt = { alt_text: "No disponible" }
    };
    if (description != null) {
        description = description.replace(/^<p>|<\/p>$/g, '')
    }
    const artworkDetail = {
        id: image_id,
        title: title,
        artist: artist_title,
        image_id: image_id,
        api_link: api_link,
        alt: alt.alt_text,
        short_description: short_description,
        description: description,
        gallery_title: gallery_title,
        subject_titles: subject_titles,
        alt_image_ids: alt_image_ids
    }

    const storage = () => {
        sessionStorage.setItem('artworkDetail', JSON.stringify(artworkDetail));
    }

    return (
  <div
    key={id}
    className="w-[100%] grid relative lg:flex flex-col items-center text-center bg-[#f7f5f0] p-4 rounded-[32px_8px_32px_8px] border-8 border-[#5a3a1b] shadow-xl sm:w-[75%] md:w-[85%] lg:w-full mx-auto mb-8 h-[500px] justify-center lg:justify-between"
    style={{ boxShadow: '0 8px 32px 0 rgba(90,58,27,0.25), 0 1.5px 0 0 #3e2610' }}
  >
    <Link
      href={`/detail/${id}`}
      onClick={() => storage()}
      className="w-full mb-4 rounded-[24px_6px_24px_6px] overflow-hidden shadow-md h-[180px] flex items-center justify-center"
    >
      {image_id && <ImageComponent idImage={image_id} alt={alt?.alt_text || "No disponible"} styles={false} loading={loading} unoptimized/>}
    </Link>
    <div className="grid lg:flex flex-col justify-around h-[220px] w-full">
      <h2 className="h-auto font-bold text-[#3e2610] mb-1 drop-shadow-sm w-full flex justify-center overflow-auto lg:max-h-[100px]">
        {title}
      </h2>
      <p className="h-auto flex-col text-[0.9em] text-md text-[#7a5c3a] font-semibold mb-2 flex items-center justify-center overflow-hidden text-ellipsis w-full">
        Artista: <span className="text-[0.9em] font-normal text-[#3e2610] ml-1">{artist_title}</span>
      </p>
      <p className="text-md text-[#7a5c3a] text-[0.9em] font-semibold mb-2 h-[24px] flex items-center justify-center">Descripción:</p>
      <p className="overflow-y-auto text-sm text-[#3e2610] bg-[#f0e6d6] rounded-lg px-3 py-2 shadow-inner max-h-[80px] w-full">
        {short_description ? short_description : "No disponible"}
      </p>
    </div>
    <FavoriteButton image_id={image_id} artworkDetail={artworkDetail} />
  </div>
);
}

export default ArtModal