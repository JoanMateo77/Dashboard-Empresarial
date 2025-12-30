export type Company = {
  id: string;
  name: string;
  email: string;
  country: string;
  website?: string;
  phone?: string;
  createdAt: string; // ISO date
};

// Datos que llegan desde el formulario (sin los campos que genera la app).
export type NewCompany = Omit<Company, "id" | "createdAt">;
