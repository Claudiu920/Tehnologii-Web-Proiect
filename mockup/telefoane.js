// Datele de test și valorile permise
const telefoane = [
  { id: 1, titlu: "iPhone 15 Pro", inStoc: false, stare: "nou" },
  { id: 2, titlu: "Samsung Galaxy S24", inStoc: true, stare: "resigilat" },
  { id: 3, titlu: "Google Pixel 8", inStoc: true, stare: "second-hand" }
];

const STARI_PERMISE = ["nou", "resigilat", "second-hand"];

// Funcția 1: Listarea titlurilor
function listeazaTitluri(lista) {
  return lista.map((t) => t.titlu);
}

// Funcția 2: Numărarea elementelor active (în stoc)
function numaraInStoc(lista) {
  return lista.filter((t) => t.inStoc).length;
}

// Funcția 3: Căutarea după titlu (case insensitive)
function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((t) => t.titlu.toLowerCase().includes(textCautat));
}

// Funcție ajutătoare pentru generarea următorului ID
function nextId(lista) {
  return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

// Funcția 4: Adăugarea unui element (cu validare și imutabilitate)
function adaugaTelefon(lista, titlu, stare = "nou") {
  const titluCurat = titlu.trim();
  
  // Validare 1: titlu gol
  if (!titluCurat) {
    console.log("Eroare validare: Titlul nu poate fi gol.");
    return lista;
  }
  
  // Validare 2: stare permisă
  if (!STARI_PERMISE.includes(stare)) {
    console.log(`Eroare validare: Starea '${stare}' este invalidă.`);
    return lista;
  }
  
  // Creare obiect nou și returnarea unei noi liste (imutabilitate)
  const telefonNou = {
    id: nextId(lista),
    titlu: titluCurat,
    inStoc: true, // implicit un telefon adăugat e în stoc
    stare: stare
  };
  
  return [...lista, telefonNou];
}

// Funcția 5: Comutarea stării (inStoc -> Vandut și invers)
function comutaStoc(lista, id) {
  return lista.map((t) => 
    t.id === id ? { ...t, inStoc: !t.inStoc } : t
  );
}

// Funcția 6: Ștergerea unui element
function stergeTelefon(lista, id) {
  return lista.filter((t) => t.id !== id);
}


// ==========================================
// Testele din consolă (exact ca în ghid)
// ==========================================

console.log("--- Citire ---");
console.log("Modele telefoane:", listeazaTitluri(telefoane).join(", "));
console.log("In stoc:", numaraInStoc(telefoane));
console.log("Căutare 'galaxy':", listeazaTitluri(cautaDupaTitlu(telefoane, "galaxy")).join(", "));

console.log("\n--- Adăugare ---");
let listaNoua = adaugaTelefon(telefoane, "Motorola Edge 50", "nou");
console.log("Lista nouă are:", listaNoua.length, "telefoane.");
console.log("Originalul a rămas cu:", telefoane.length, "telefoane."); // Demonstrează imutabilitatea

console.log("\n--- Modificare și ștergere ---");
listaNoua = comutaStoc(listaNoua, 1);
console.log("După returnarea în stoc a id-ului 1, total în stoc:", numaraInStoc(listaNoua));

listaNoua = stergeTelefon(listaNoua, 3);
console.log("După ștergerea id-ului 3 (Pixel 8), au rămas:", listeazaTitluri(listaNoua).join(", "));

console.log("\n--- Validare ---");
adaugaTelefon(listaNoua, "   "); // Testează titlul gol
adaugaTelefon(listaNoua, "OnePlus 12", "defect"); // Testează starea invalidă