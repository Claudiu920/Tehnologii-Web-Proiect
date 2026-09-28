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
| Gemini | Generarea structurii HTML, a variabilelor CSS si a fisierelor de configurare pentru mockup. |

Detalii pe etapa:
- Etapa 1: layout CSS Grid/Flexbox si structura HTML. Vezi folderul `ai-log/`.

## Cum se ruleaza
Deschide `index.html` intr-un browser. Fara pas de compilare (build), fara server.

## Stadiu
- [x] Etapa 1: mockup static
- [ ] Etapa 2: logica datelor in JavaScript

## Tabel de verificare Etapa 1

| ID | Cerinta | Unde (permalink) | Cum se verifica |
| --- | --- | --- | --- |
| S1-R1 | README: descriere, campuri, date de test, cum se ruleaza | README.md | citire |
| S1-R2 | Sectiunea de utilizare AI | README.md | citire |
| S1-R3 | Jurnal AI pentru etapa 1 | ai-log/etapa-01.md | citire |
| S1-R4 | antet, formular (text + select), 3 carduri cu date proprii | index.html#L..-L.. | deschide pagina |
| S1-R5 | cardul finalizat arata diferit | style.css#L.. (.done) | priveste cardul |
| S1-R6 | 2 coloane pe desktop, 1 sub 700px | style.css#L.. (@media) | redimensioneaza < 700px |
| S1-R7 | focus vizibil, tema intunecata lizibila | style.css#L.. | Tab; modul intunecat (dark mode) |
| S1-R8 | commit-ul "Stage 1" publicat (pushed) | link catre commit | istoricul de commit-uri |