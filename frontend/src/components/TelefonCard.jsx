const ETICHETE_STARE = {
  nou: "Nou",
  resigilat: "Resigilat",
  "second-hand": "Second Hand",
};

export default function TelefonCard({ telefon }) {
  return (
    <li className={telefon.inStoc ? "phone-card" : "phone-card out-of-stock"}>
      <div>
        <h3>{telefon.titlu}</h3>
        <p className="price">Preț: {telefon.pret} RON</p>
        <span className="badge">
          Stare: {ETICHETE_STARE[telefon.stare]}
        </span>
      </div>
      <span className="status">
        {telefon.inStoc ? "În stoc" : "Stoc epuizat"}
      </span>
    </li>
  );
}