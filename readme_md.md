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