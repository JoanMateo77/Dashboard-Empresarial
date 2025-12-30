"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { seedCompanies } from "./companies.data";
import { Company, NewCompany } from "./companies.types";

const STORAGE_KEY = "dashboard.companies";

type CompaniesContextValue = {
  companies: Company[];
  addCompany: (data: NewCompany) => void;
  removeCompany: (id: string) => void;
  /** false hasta que se leyo localStorage; util para mostrar skeletons. */
  hydrated: boolean;
};

const CompaniesContext = createContext<CompaniesContextValue | null>(null);

export function CompaniesProvider({ children }: { children: React.ReactNode }) {
  // En el primer render (server y client) usamos el seed para no romper la
  // hidratacion; despues, en el effect, sincronizamos con localStorage.
  const [companies, setCompanies] = useState<Company[]>(seedCompanies);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCompanies(JSON.parse(raw) as Company[]);
    } catch {
      // localStorage corrupto o no disponible: nos quedamos con el seed.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(companies));
  }, [companies, hydrated]);

  const addCompany = useCallback((data: NewCompany) => {
    const company: Company = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setCompanies((prev) => [company, ...prev]);
  }, []);

  const removeCompany = useCallback((id: string) => {
    setCompanies((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const value = useMemo(
    () => ({ companies, addCompany, removeCompany, hydrated }),
    [companies, addCompany, removeCompany, hydrated]
  );

  return (
    <CompaniesContext.Provider value={value}>
      {children}
    </CompaniesContext.Provider>
  );
}

export function useCompanies() {
  const ctx = useContext(CompaniesContext);
  if (!ctx) {
    throw new Error("useCompanies debe usarse dentro de <CompaniesProvider>");
  }
  return ctx;
}
