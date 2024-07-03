"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const MarcoContext = createContext<DatosSesion>(undefined as any);

export function Marco({ children }: { children: React.ReactNode }) {
  const [datosSesion, setDatosSesion] = useState<DatosSesion>(undefined as any);

  const getDatosSesion = async () => {
    const response = await fetch("/api/auth");
    if (response.ok) {
      const data = await response.json();
      setDatosSesion(data);
    } else {
      setDatosSesion(document.datosSesion);
    }
  };

  useEffect(() => {
    getDatosSesion();
  }, []);

  return (
    <MarcoContext.Provider value={datosSesion}>
      {children}
    </MarcoContext.Provider>
  );
}

export function useMarcoContext() {
  return useContext(MarcoContext);
}