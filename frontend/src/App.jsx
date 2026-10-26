import { useState } from "react";
import TelefonList from "./components/TelefonList.jsx";
import "./App.css";

const dateInitiale = [
  { id: 1, titlu: "iPhone 15 Pro", inStoc: false, stare: "nou", pret: 5000 },
  { id: 2, titlu: "Samsung Galaxy S24", inStoc: true, stare: "resigilat", pret: 4000 },
  { id: 3, titlu: "Google Pixel 8", inStoc: true, stare: "second-hand", pret: 3000 }
];

export default function App() {
  const [telefoane, setTelefoane] = useState(dateInitiale);
  const [isDark, setIsDark] = useState(false);

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
          <TelefonList
            telefoane={telefoane}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}