export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  return res.status === 204 ? null : res.json();
}

export function fetchTelefoane() {
  return request("/telefoane");
}

export function fetchTelefon(id) {
  return request(`/telefoane/${id}`);
}

export function createTelefon(telefon) {
  return request("/telefoane", {
    method: "POST",
    body: JSON.stringify(telefon),
  });
}

export function updateTelefon(id, changes) {
  return request(`/telefoane/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteTelefon(id) {
  return request(`/telefoane/${id}`, {
    method: "DELETE",
  });
}