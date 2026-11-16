import TelefonCard from "./TelefonCard.jsx";
import styles from "./TelefonList.module.css";

export default function TelefonList({ telefoane, onToggle, onDelete }) {
  if (telefoane.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există niciun telefon în inventar.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
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