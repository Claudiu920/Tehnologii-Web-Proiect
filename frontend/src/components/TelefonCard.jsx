import { Link } from "react-router-dom";
import { ETICHETE_STARE } from "../constants.js";
import styles from "./TelefonCard.module.css";

export default function TelefonCard({ telefon, onToggle, onDelete }) {
  const isDone = !telefon.inStoc;

  return (
    <li
      className={isDone ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={telefon.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onToggle(telefon.id)}
          aria-label={`Marchează ${telefon.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/telefoane/${telefon.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {telefon.titlu}
          </Link>
          <div className={styles.meta}>
            <span className={`badge badge-${telefon.stare}`}>
              {ETICHETE_STARE[telefon.stare] ?? telefon.stare}
            </span>
            {telefon.pret !== undefined && (
              <span className={styles.price}>{telefon.pret} RON</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
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