const ETICHETE_STARE = {
  nou: "Nou",
  resigilat: "Resigilat",
  "second-hand": "Second Hand",
};

export default function TelefonCard({ telefon, onToggle, onDelete }) {
  return (
    <li className={telefon.inStoc ? "phone-card" : "phone-card out-of-stock"}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Checkbox pentru comutarea stării (controlat de React prin onToggle) */}
        <input
          type="checkbox"
          checked={!telefon.inStoc}
          onChange={() => onToggle(telefon.id)}
        />
        <div>
          <h3>{telefon.titlu}</h3>
          <p className="price">Preț: {telefon.pret} RON</p>
          <span className="badge">
            Stare: {ETICHETE_STARE[telefon.stare]}
          </span>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span className="status">
          {telefon.inStoc ? "În stoc" : "Stoc epuizat"}
        </span>
        {/* Butonul de ștergere apelează funcția onDelete cu id-ul telefonului curent */}
        <button
          className="btn-danger"
          onClick={() => onDelete(telefon.id)}
        >
          Șterge
        </button>
      </div>
    </li>
  );
}