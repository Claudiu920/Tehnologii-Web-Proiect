import { useEffect, useState } from "react";
import TelefonList from "./components/TelefonList.jsx";
import { fetchTelefoane } from "./api.js";
import "./App.css";

export default function App() {
  const [telefoane, setTelefoane] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchTelefoane();
        if (!ignore) setTelefoane(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  const inStocCount = telefoane.filter(t => t.inStoc).length;

  function handleToggle(id) {
    setTelefoane(telefoane.map(t =>
      t.id === id ? { ...t, inStoc: !t.inStoc } : t
    ));
  }

  function handleDelete(id) {
    setTelefoane(telefoane.filter(t => t.id !== id));
  }

  return (
    <div className={isDark ? "app-wrapper dark" : "app-wrapper"}>
      <header className="app-header">
        <img src="/bannersite.jpg" alt="Banner PhoneRo" className="header-banner" />
        <h1>PhoneRO</h1>
        <p>Cel mai nou magazin de telefoane de pe piața din România.</p>
        <p className="app-count">
          {telefoane.length} telefoane disponibile, dintre care {inStocCount} în stoc
        </p>
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? "Mod Luminos ☀️" : "Mod Întunecat 🌙"}
        </button>
      </header>
      
      <main className="container">
        <section className="panel">
          <h2>Inventarul meu</h2>
          
          {loading && <p className="info">Se încarcă...</p>}
          
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && !error && (
            <TelefonList
              telefoane={telefoane}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  );
}