import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTelefon } from "../api.js";
import { ETICHETE_STARE } from "../constants.js";
import styles from "./TelefonDetaliuPage.module.css";

export default function TelefonDetaliuPage() {
  const { id } = useParams();
  const [telefon, setTelefon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchTelefon(id)
      .then((data) => {
        if (!ignore) {
          setTelefon(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error || !telefon) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Telefonul nu a putut fi încărcat: {error ?? "Element inexistent"}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  const isDone = !telefon.inStoc;

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Înapoi la listă
      </Link>

      <h2 className={isDone ? styles.done : undefined} data-testid="detail-title">
        {telefon.titlu}
      </h2>

      <dl className={styles.fields}>
        <dt>Stare</dt>
        <dd>
          <span className={`badge badge-${telefon.stare}`}>
            {ETICHETE_STARE[telefon.stare] ?? telefon.stare}
          </span>
        </dd>
        {telefon.pret !== undefined && (
          <>
            <dt>Preț</dt>
            <dd>{telefon.pret} RON</dd>
          </>
        )}
        <dt>Disponibilitate</dt>
        <dd>{telefon.inStoc ? "În stoc" : "Stoc epuizat"}</dd>
        <dt>ID</dt>
        <dd>{telefon.id}</dd>
      </dl>
    </section>
  );
}