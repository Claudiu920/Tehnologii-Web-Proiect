import { useState } from "react";

const STARI = [
  { value: "nou", label: "Nou" },
  { value: "resigilat", label: "Resigilat" },
  { value: "second-hand", label: "Second Hand" },
];

const TITLU_MAX = 100;

export default function TelefonForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [pret, setPret] = useState("2500");
  const [stare, setStare] = useState("nou");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    const p = Number(pret);

    if (t === "") return "Titlul este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    if (!Number.isFinite(p) || p <= 0) return "Prețul trebuie să fie un număr mai mare decât 0.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({
        titlu: titlu.trim(),
        pret: Number(pret),
        stare,
        inStoc: true,
      });
      setTitlu("");
      setPret("2500");
      setStare("nou");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className="telefon-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: iPhone 15 Pro"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Preț (RON)
        <input
          type="number"
          value={pret}
          onChange={(e) => setPret(e.target.value)}
          min="1"
          data-testid="form-pret"
        />
      </label>

      <label>
        Stare
        <select
          value={stare}
          onChange={(e) => setStare(e.target.value)}
          data-testid="form-stare"
        >
          {STARI.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}