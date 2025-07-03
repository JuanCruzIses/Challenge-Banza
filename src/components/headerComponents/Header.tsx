"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { FetchApi } from "@/app/helpers/FetchApi"; // Ajusta la ruta si es necesario
import { useSearchResults } from "@/context/SearchResultsContext";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const { setResults } = useSearchResults();

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchTerm.trim()) return;
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(searchTerm)}&limit=24`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.data || []);
      setSearchTerm(""); // Limpiar el input después de buscar
      router.push("/resultados");
    } catch (error) {
      setResults([]);
      setSearchTerm(""); // Limpiar el input también en caso de error
      router.push("/resultados");
    }
  };

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <header className={`${!isDesktop ? "sticky" : "static"} top-0 flex justify-between md:grid md:grid-cols-[auto_1fr_auto] items-center p-4 md:px-12 bg-gray-100 shadow-md z-10`}>
      <Link href="/">
        <Image src="/Art_Institute_of_Chicago_Logo.png" alt="Logo" width={80} height={80} className="logo" priority />
      </Link>
       <form
        className="hidden w-[50%] m-auto md:grid md:grid-cols-[1fr_auto] gap-4 justify-center"
        role="search"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Buscar obras de arte..."
          className="border rounded p-2 w-full max-w-md"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white cursor-pointer px-4 py-2 rounded hover:bg-[#1a1919]"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
      {/* <div className='hidden w-[50%] m-auto md:grid md:grid-cols-[1fr_auto] gap-4 justify-center' role="search">
        <input type="text" placeholder="Buscar obras de arte..." className="border rounded p-2 w-full max-w-md"/>
        <button className="bg-black text-white cursor-pointer px-4 py-2 rounded hover:bg-[#1a1919]" >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div> */}
      <nav className='hidden items-center md:grid grid-cols-2 gap-10' >
        <Link href="/favorites" className="hover:underline">Favoritos</Link>
        <Link target='_blank' href="https://www.artic.edu/" className="hover:underline" onClick={() => setShowMenu(false)}>Sitio oficial</Link>
      </nav>
      <button
        className="md:hidden flex items-center justify-end hover:border-solid hover:border-[1.5px] border-[#433f3f] rounded-2xl cursor-pointer p-2.5"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>

      {showMenu && (
        <div className="text-center absolute right-0 top-[100%] h-[50vh] shadow-md p-6 flex flex-col w-[50vw] z-50 bg-opacity-40 bg-gray-100 gap-10 rounded-bl-2xl">
          <Link href="/favorites" className="hover:underline" onClick={() => setShowMenu(false)}>Favoritos</Link>
          <Link target='_blank' href="https://www.artic.edu/" className="hover:underline" onClick={() => setShowMenu(false)}>Sitio oficial</Link>
        </div>
      )}
    </header>
  );
};

export default Header;