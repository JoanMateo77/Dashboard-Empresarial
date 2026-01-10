"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCompanies } from "../../companies-context";
import { NewCompany } from "../../companies.types";

const EMPTY: NewCompany = {
  name: "",
  email: "",
  country: "",
  website: "",
  phone: "",
};

type FormErrors = Partial<Record<keyof NewCompany, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function FormCreateCustomer({ onCreated }: { onCreated?: () => void }) {
  const { addCompany } = useCompanies();
  const [values, setValues] = useState<NewCompany>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});

  const setField =
    (field: keyof NewCompany) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value }));

  function validate(): boolean {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "El nombre es obligatorio";
    if (!values.email.trim()) next.email = "El email es obligatorio";
    else if (!EMAIL_RE.test(values.email)) next.email = "Email no valido";
    if (!values.country.trim()) next.country = "El pais es obligatorio";
    if (values.website?.trim() && !/^https?:\/\//.test(values.website.trim())) {
      next.website = "Debe empezar con http:// o https://";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    addCompany({
      name: values.name.trim(),
      email: values.email.trim(),
      country: values.country.trim(),
      website: values.website?.trim() || undefined,
      phone: values.phone?.trim() || undefined,
    });

    setValues(EMPTY);
    setErrors({});
    onCreated?.();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Name" error={errors.name}>
        <Input
          value={values.name}
          onChange={setField("name")}
          placeholder="Acme Inc."
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <Input
          type="email"
          value={values.email}
          onChange={setField("email")}
          placeholder="contact@acme.com"
        />
      </Field>

      <Field label="Country" error={errors.country}>
        <Input
          value={values.country}
          onChange={setField("country")}
          placeholder="Spain"
        />
      </Field>

      <Field label="Website" error={errors.website}>
        <Input
          value={values.website}
          onChange={setField("website")}
          placeholder="https://acme.com"
        />
      </Field>

      <Field label="Phone">
        <Input
          value={values.phone}
          onChange={setField("phone")}
          placeholder="+34 600 000 000"
        />
      </Field>

      <div className="sm:col-span-2 flex justify-end">
        <Button type="submit">Create company</Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      {children}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
