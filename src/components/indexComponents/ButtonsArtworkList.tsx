"use client";
import React, { useCallback } from 'react';

interface ButtonsArtworkListProps {
  setNumberPage: React.Dispatch<React.SetStateAction<number>>;
  numberPage: number;
}

const ButtonsArtworkList: React.FC<ButtonsArtworkListProps> = ({ setNumberPage, numberPage }) => {
  const nextPage = useCallback(() => {
    setNumberPage(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setNumberPage]);

  const prevPage = useCallback(() => {
    setNumberPage(prev => prev > 1 ? prev - 1 : prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setNumberPage]);

  return (
    <div className="col-span-full text-center mt-4">
      <button
        onClick={prevPage}
        disabled={numberPage === 1}
        className={`hover:cursor-pointer col-span-full mx-2 bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors ${numberPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {"<"}
      </button>
      <button
        onClick={nextPage}
        className="hover:cursor-pointer col-span-full mx-2 bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        {">"}
      </button>
    </div>
  );
};

export default ButtonsArtworkList;