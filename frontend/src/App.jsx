import TelefonList from "./components/TelefonList.jsx";

const telefoane = [
  { id: 1, titlu: "iPhone 15 Pro", pret: 4700, inStoc: false, stare: "nou" },
  { id: 2, titlu: "Samsung Galaxy S24", pret: 5200, inStoc: true, stare: "resigilat" },
  { id: 3, titlu: "Google Pixel 8", pret: 2700,inStoc: true, stare: "second-hand" }
];

export default function App() {
  const inStoc = telefoane.filter((t) => t.inStoc).length;

  return (
    <>
      <header className="app-header">
        {/* Vite citeste imaginile direct din public/ */}
        <img src="/bannersite.jpg" alt="Banner PhoneRo" className="header-banner" />
        <h1>PhoneRO</h1>
        <p>Cel mai nou magazin de telefoane de pe piata din Romania.</p>
        <p className="app-count">
          {telefoane.length} telefoane disponibile, dintre care {inStoc} în stoc
        </p>
      </header>
      
    <main className="container">
      <section className="panel">
        <h2>Inventarul meu</h2>
          <TelefonList telefoane={telefoane} />
        </section>
      </main>
    </>
  );
}