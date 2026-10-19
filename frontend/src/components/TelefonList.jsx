import TelefonCard from "./TelefonCard.jsx";

export default function TelefonList({ telefoane }) {
  if (telefoane.length === 0) {
    return <p className="empty">Nu există niciun telefon în inventar.</p>;
  }

  return (
    <ul className="phone-list">
      {telefoane.map((telefon) => (
        <TelefonCard key={telefon.id} telefon={telefon} />
      ))}
    </ul>
  );
}