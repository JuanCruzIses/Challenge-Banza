"use client";
import FavoriteList from '@/app/favorites/components/FavoriteList';
import React from 'react';

const Favorite: React.FC = () => (
    <div className="grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen p-8 pb-14 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className='w-full'>
        <h1 className='font-bold underline'>Favoritos</h1>
        <p>Encontra todas tus obras favoritas en un solo lugar</p>
      </div>
      <FavoriteList/>
    </div>
)

export default Favorite;