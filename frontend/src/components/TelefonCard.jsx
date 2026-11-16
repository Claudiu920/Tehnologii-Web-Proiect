const ETICHETE_STARE = {
  nou: "Nou",
  resigilat: "Resigilat",
  "second-hand": "Second Hand",
};

export default function TelefonCard({ telefon, onToggle, onDelete }) {
  return (
    <li
      className={telefon.inStoc ? "phone-card" : "phone-card out-of-stock"}
      data-testid="item"
      data-id={telefon.id}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={!telefon.inStoc}
          onChange={() => onToggle(telefon.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{telefon.titlu}</h3>
          <p className="price">Preț: {telefon.pret} RON</p>
          <span className="badge">Stare: {ETICHETE_STARE[telefon.stare]}</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span className="status">
          {telefon.inStoc ? "În stoc" : "Stoc epuizat"}
        </span>
        <button
          className="btn-danger"
          onClick={() => onDelete(telefon.id)}
          aria-label={`Șterge ${telefon.titlu}`}
          data-testid="item-delete"
        >
          Șterge
        </button>
      </div>
    </li>
  );
}