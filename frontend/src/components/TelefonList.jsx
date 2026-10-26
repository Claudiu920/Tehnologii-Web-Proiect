import TelefonCard from "./TelefonCard.jsx";

export default function TelefonList({ telefoane, onToggle, onDelete }) {
  if (telefoane.length === 0) {
    return <p className="empty">Nu există niciun telefon în inventar.</p>;
  }

  return (
    <ul className="item-list">
      {telefoane.map((telefon) => (
        <TelefonCard
          key={telefon.id}
          telefon={telefon}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}