# PhoneStore
Aplicatie pentru gestionarea inventarului unui magazin de telefoane.
Monitorizeaza modelele de telefoane, disponibilitatea si starea (nou/resigilat/second-hand).

## Modelul de date
| Camp | Tip | Note |
| --- | --- | --- |
| Model telefon | text | obligatoriu, max 100 caractere |
| Vandut | boolean | comutat din lista, implicit fals |
| Stare | valori fixe | Nou, Resigilat, Second-hand |
| Categorie | relatie | Smartphone, Tablete, Accesorii |
| Proprietar | relatie | proprietarul elementului (din saptamana 11) |

Date de test folosite in toate etapele:
1. iPhone 15 Pro, Vandut, Nou
2. Samsung Galaxy S24, In stoc, Resigilat
3. Google Pixel 8, In stoc, Second-hand

## Utilizare AI
| Instrument | Folosit pentru |
| --- | --- |
| Gemini | Generarea structurii HTML, a variabilelor CSS si a fisierelor de configurare pentru mockup. Depanare erori consola si migrare structura in React/Vite pentru Etapa 3. |

Detalii pe etapa:
- Etapa 1: layout CSS Grid/Flexbox si structura HTML. Vezi folderul `ai-log/`.
- Etapa 2: logica datelor cu operatiuni imutabile JavaScript. Vezi folderul `ai-log/`.
- Etapa 3: mutarea fisierelor vechi, crearea proiectului React cu Vite si ajustarea layout-ului CSS. Vezi folderul `ai-log/`.

## Cum se ruleaza
**Etapa 1 si 2 (Mockup static):**
Deschide `mockup/index.html` intr-un browser. Fara pas de compilare (build), fara server.

**Etapa 3+ (Frontend React):**
In terminal, navigheaza in folderul `frontend` si porneste serverul de dezvoltare Vite:
```bash
cd frontend
npm install
npm run dev
```
Apoi deschide linkul afisat in terminal (de obicei http://localhost:5173).

## Stadiu
- [x] Etapa 1: mockup static
- [x] Etapa 2: logica datelor in JavaScript
- [x] Etapa 3: Vite si proiect React
- [ ] Etapa 4: Componente React

## Tabel de verificare Etapa 1

| ID | Cerinta | Unde (permalink) | Cum se verifica |
| --- | --- | --- | --- |
| S1-R1 | README: descriere, campuri, date de test, cum se ruleaza | README.md | citire |
| S1-R2 | Sectiunea de utilizare AI | README.md | citire |
| S1-R3 | Jurnal AI pentru etapa 1 | ai-log/etapa-01.md | citire |
| S1-R4 | antet, formular (text + select), 3 carduri cu date proprii | mockup/index.html#L..-L.. | deschide pagina |
| S1-R5 | cardul finalizat arata diferit | mockup/style.css#L.. (.done) | priveste cardul |
| S1-R6 | 2 coloane pe desktop, 1 sub 700px | mockup/style.css#L.. (@media) | redimensioneaza < 700px |
| S1-R7 | focus vizibil, tema intunecata lizibila | mockup/style.css#L.. | Tab; modul intunecat (dark mode) |
| S1-R8 | commit-ul "Stage 1" publicat (pushed) | link catre commit | istoricul de commit-uri |

## Etapa 2: Logica datelor
JavaScript pur, fara modificarea DOM-ului. `telefoane.js` contine array-ul si functiile imutabile care gestioneaza operatiunile. Rezultatele sunt testate si afisate direct in consola browserului (F12).

## Tabel de verificare Etapa 2

| ID | Cerinta | Unde (permalink) | Cum se verifica |
| --- | --- | --- | --- |
| S2-R1 | Fisier JS legat, afiseaza la incarcare | mockup/index.html#L.. (script) | deschide pagina, F12 |
| S2-R2 | 3+ elemente cu id, nume, stare, eticheta | mockup/telefoane.js#L..-L.. | citire |
| S2-R3 | listare, numarare, cautare, adaugare, comutare, stergere | mockup/telefoane.js#L..-L.. | afisaj in consola |
| S2-R4 | adaugarea respinge nume gol si eticheta invalida | mockup/telefoane.js#L..-L.. | ultimele 2 linii din consola |
| S2-R5 | array-ul original ramane neschimbat dupa adaugare | mockup/telefoane.js#L.. | linie in consola |
| S2-R6 | README sectiunea Etapa 2 + Jurnal AI | README.md, ai-log/etapa-02.md | citire |
| S2-R7 | commit "Stage 2" publicat | link catre commit | istoricul de commit-uri |

## Etapa 3: Proiect Vite si React
A fost configurat un proiect Vite bazat pe React in folderul `frontend`. Codul static anterior a fost mutat in `mockup`. CSS-ul a fost adaptat pentru un layout temporar cu o singura coloana, iar datele statice sunt afisate sub forma de text JSON. Fisierele generate initial de Vite au fost curatate, iar contorul este calculat dinamic in React.

## Tabel de verificare Etapa 3

| ID | Cerinta | Unde (permalink) | Cum se verifica |
| --- | --- | --- | --- |
| S3-R1 | npm run dev porneste fara erori | frontend/package.json | npm install, npm run dev |
| S3-R2 | numele aplicatiei si contorul calculate din date | frontend/src/App.jsx#L8-L15 | editeaza datele, salveaza |
| S3-R3 | datele din README, nu din exemplu | frontend/src/App.jsx#L1-L5 | compara cu README |
| S3-R4 | stilurile din etapa 1 refolosite | frontend/src/App.css | priveste pagina |
| S3-R5 | node_modules ignorat, build-ul trece | frontend/.gitignore | npm run build |
| S3-R6 | sectiune Etapa 3 in README + jurnal AI | README.md, ai-log/etapa-03.md | citire |
| S3-R7 | commit-ul "Stage 3" publicat | link catre commit | istoricul de commit-uri |

# PhoneRo - Magazin de Telefoane

Proiect realizat pentru disciplina Tehnologii Web.

---

## Etapa 4: Componente construite din date

În această etapă, lista de telefoane este randată dinamic din date cu ajutorul a două componente React reutilizabile:
- `TelefonList`: Primește întregul tablou de date (`telefoane`) și randează câte un card pentru fiecare element. Tratează și cazul în care lista este goală (afisând un mesaj corespunzător).
- `TelefonCard`: Primește datele unui singur telefon prin intermediul proprietăților (`props`) și afișează informațiile despre acesta (titlu, preț, stare, disponibilitate în stoc).

---

## Stadiu proiect (Status)

- [x] Etapa 1: Tema și structura de date
- [x] Etapa 2: Pagina HTML statică
- [x] Etapa 3: Proiect Vite și React
- [x] Etapa 4: Componente randate din date

---

## Tabel de verificare (Checklist Etapa 4)

| Cerință | Stare |
| :--- | :---: |
| Datele sunt transmise prin `props` către componente | ✅ |
| Componenta copil (`TelefonCard`) afișează corect un element | ✅ |
| Componenta părinte (`TelefonList`) parcurge lista folosind `.map()` | ✅ |
| Fiecare element din listă are un atribut unic `key` | ✅ |
| Este tratat cazul în care lista este goală (`telefoane = []`) | ✅ |
| Nu există erori sau avertismente în consola browser-ului | ✅ |

## Tabel de verificare Etapa 5
| ID | Cerinta | Unde (permalink) | Cum se verifica |
| --- | --- | --- | --- |
| S5-R1 | State local pentru lista de date | frontend/src/App.jsx | citire cod (`useState`) |
| S5-R2 | State local pentru functionalitate de UI (Dark Mode) | frontend/src/App.jsx | citire cod (`isDark`) |
| S5-R3 | Functie de modificare state (comutare status inStoc) | frontend/src/App.jsx | apasa checkbox pe card |
| S5-R4 | Functie de stergere element din state | frontend/src/App.jsx | apasa buton 'Sterge' |
| S5-R5 | Transmiterea evenimentelor (props) catre copii | frontend/src/components/TelefonCard.jsx | citire cod (`onToggle`, `onDelete`) |
| S5-R6 | README actualizat + Jurnal AI Etapa 5 | README.md, ai-log/etapa-05.md | citire |
| S5-R7 | Commit separat cu tabelul si push final | link catre commit | istoricul de commit-uri |

## Etapa 6: Date de la un API (useEffect)
Datele nu mai sunt scrise direct în codul React, ci sunt preluate în mod dinamic de la un server local REST construit cu `json-server` (`db.json`)[cite: 22, 23]. Aplicația gestionează cele trei stări ale unei cereri: încărcare (loading), succes și eroare explicită[cite: 22, 27].

## Cum se ruleaza (Etapa 6)
Pentru a rula aplicația cu tot cu serverul de API, ai nevoie de **două terminale** deschise în folderul `frontend/`:
1. Terminal 1 (pornirea serverului API):
   ```bash
   npm run api

```

2. Terminal 2 (pornirea aplicației React):
```bash
npm run dev

```



Apoi deschide în browser adresa `http://localhost:5173`.

## Stadiu

* [x] Etapa 6: Date de la un API (useEffect)

## Tabel de verificare Etapa 6

| ID | Cerinta | Unde (permalink) | Cum se verifica |
| --- | --- | --- | --- |
| S6-R1 | `npm run api` porneşte, ruta afişează JSON | frontend/package.json, frontend/db.json | deschide `localhost:3001/telefoane` |
| S6-R2 | Datele nu mai sunt scrise direct în codul React | frontend/src/App.jsx | citire cod |
| S6-R3 | Mesaj de aşteptare (loading) la încărcare | frontend/src/App.jsx | simulare cu delay |
| S6-R4 | Mesaj de eroare explicit când API-ul este oprit | frontend/src/App.jsx | oprește `npm run api`, reîncarcă |
| S6-R5 | `fetch` doar în `api.js`, URL preluat din variabila de mediu | frontend/src/api.js, frontend/.env.example | căutare după `fetch` |
| S6-R6 | README actualizat + Jurnal AI Etapa 6 | README.md, ai-log/etapa-06.md | citire |
| S6-R7 | Commit-ul pentru Etapa 6 publicat pe GitHub | istoricul de commit-uri | verificare GitHub |


## Etapa 7: Formular și validare
Utilizatorii pot adăuga telefoane direct din interfață printr-un formular controlat și validat, iar operațiile de adăugare (`POST`), bifare (`PATCH`) și ștergere (`DELETE`) se salvează pe serverul `json-server`, rezistând la reîncărcarea paginii. Totodată, aplicația este pregătită pentru verificarea automată prin fișierul `tw.json` și atributele `data-testid`.

### Stadiu
- [x] Etapa 7: Formular și validare

### Tabel de verificare Etapa 7
| ID | Cerință | Unde (permalink) | Cum se verifică |
| --- | --- | --- | --- |
| S7-R1 | Formular controlat (`value` + `onChange` pe câmpuri) | `frontend/src/components/TelefonForm.jsx` | citire cod |
| S7-R2 | Câmpul gol afișează eroare în pagină, fără cerere la server | `frontend/src/components/TelefonForm.jsx` | trimitere formular gol + tab Network |
| S7-R3 | Elementul adăugat apare în listă și rămâne după refresh | `frontend/src/App.jsx`, `frontend/src/api.js` | adăugare element + reîncărcare pagină |
| S7-R4 | Bifarea și ștergerea se salvează și rămân după refresh | `frontend/src/App.jsx`, `frontend/src/api.js` | bifare/ștergere + reîncărcare pagină |
| S7-R5 | Buton dezactivat cât timp se trimite, golire doar la succes | `frontend/src/components/TelefonForm.jsx` | delay pe server / oprire server la trimitere |
| S7-R6 | Fișierul `tw.json` în rădăcină și atributele `data-testid` | `tw.json`, `TelefonCard.jsx`, `TelefonList.jsx`, `TelefonForm.jsx`, `App.jsx` | verificare în consola browserului |
| S7-R7 | Secțiunea Etapa 7 în `README.md` + `ai-log/etapa-07.md` | `README.md`, `ai-log/etapa-07.md` | citire |
| S7-R8 | Commit-ul etapei publicat pe GitHub | istoricul de commit-uri | verificare GitHub |
```[cite: 32, 33, 35, 37, 38, 42, 43]

## Etapa 8: Navigare și stilizare pe componente
Aplicația este organizată ca Single Page Application cu React Router (listă pe `/`, pagină de detaliu dinamică pe `/telefoane/:id`, pagină `/despre` și pagină 404 pe `*`), cu un layout comun (`Layout` + `<Outlet />`) și stiluri pe componente prin CSS Modules (`*.module.css`), păstrând doar variabilele și clasele comune în `src/index.css`.

### Stadiu
- [x] Etapa 8: Navigare și stilizare pe componente

### Tabel de verificare Etapa 8
| ID | Cerință | Unde (permalink) | Cum se verifică |
| --- | --- | --- | --- |
| S8-R1 | Navigația din antet schimbă pagina fără reîncărcare | `frontend/src/App.jsx`, `frontend/src/components/Layout.jsx` | click pe linkuri + tab Network |
| S8-R2 | Click pe un element deschide pagina lui de detaliu | `frontend/src/components/TelefonCard.jsx`, `frontend/src/pages/TelefonDetaliuPage.jsx` | click pe titlul unui telefon |
| S8-R3 | Refresh pe ruta de detaliu funcționează; ID inexistent afișează eroare | `frontend/src/pages/TelefonDetaliuPage.jsx` | refresh pe `/telefoane/1`, test pe `/telefoane/999` |
| S8-R4 | Adresă inexistentă afișează pagina 404 a aplicației | `frontend/src/App.jsx`, `frontend/src/pages/NotFoundPage.jsx` | deschidere adresă inventată (ex. `/ceva`) |
| S8-R5 | Fiecare componentă are `.module.css`; `index.css` doar stiluri comune | `frontend/src/components/`, `frontend/src/pages/`, `frontend/src/index.css` | citire cod și inspectare elemente |
| S8-R6 | Atributele `data-testid` și ruta `/telefoane/:id` | `Layout.jsx`, `TelefonCard.jsx`, `TelefonDetaliuPage.jsx`, `NotFoundPage.jsx` | interogări în consola browserului |
| S8-R7 | Secțiunea Etapa 8 în `README.md` + `ai-log/etapa-08.md` | `README.md`, `ai-log/etapa-08.md` | citire |
| S8-R8 | Commit-ul etapei publicat pe GitHub | istoricul de commit-uri | verificare GitHub |