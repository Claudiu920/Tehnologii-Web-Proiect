export const STARI = [
  { value: "nou", label: "Nou" },
  { value: "resigilat", label: "Resigilat" },
  { value: "second-hand", label: "Second Hand" },
];

export const ETICHETE_STARE = Object.fromEntries(
  STARI.map((s) => [s.value, s.label])
);