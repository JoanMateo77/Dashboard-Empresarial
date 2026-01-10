import type { Metadata } from "next";

import HeaderCompanies from "./components/HeaderCompanies/HeaderCompanies";
import { CompaniesList } from "./components/CompaniesList";
import { CompaniesProvider } from "./companies-context";

export const metadata: Metadata = {
  title: "Companies",
};

export default function CompaniesPage() {
  return (
    <CompaniesProvider>
      <div className="space-y-2">
        <HeaderCompanies />
        <CompaniesList />
      </div>
    </CompaniesProvider>
  );
}
