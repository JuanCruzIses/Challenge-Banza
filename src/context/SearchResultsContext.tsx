"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchResultsContextType {
  results: any[];
  setResults: (results: any[]) => void;
}

const SearchResultsContext = createContext<SearchResultsContextType | undefined>(undefined);

export const SearchResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<any[]>([]);
  return (
    <SearchResultsContext.Provider value={{ results, setResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export const useSearchResults = () => {
  const context = useContext(SearchResultsContext);
  if (!context) {
    throw new Error("useSearchResults debe usarse dentro de SearchResultsProvider");
  }
  return context;
};
