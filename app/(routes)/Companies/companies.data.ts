import { Company } from "./companies.types";

// Datos de ejemplo que se cargan la primera vez (luego se guardan en localStorage).
export const seedCompanies: Company[] = [
  {
    id: "seed-stripe",
    name: "Stripe",
    email: "contact@stripe.com",
    country: "United States",
    website: "https://stripe.com",
    phone: "+1 888 926 2289",
    createdAt: "2025-09-02T10:15:00.000Z",
  },
  {
    id: "seed-shopify",
    name: "Shopify",
    email: "hello@shopify.com",
    country: "Canada",
    website: "https://shopify.com",
    phone: "+1 888 746 7439",
    createdAt: "2025-09-18T14:40:00.000Z",
  },
  {
    id: "seed-mercadolibre",
    name: "Mercado Libre",
    email: "info@mercadolibre.com",
    country: "Argentina",
    website: "https://mercadolibre.com",
    phone: "+54 11 4640 8000",
    createdAt: "2025-10-05T09:05:00.000Z",
  },
];
