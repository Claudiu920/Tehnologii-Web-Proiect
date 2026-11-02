export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchTelefoane() {
  const res = await fetch(`${API_URL}/telefoane`);
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.json();
}