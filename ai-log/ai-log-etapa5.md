# Jurnal utilizare AI - Etapa 5

**Sarcina:** Implementarea state-ului local si a evenimentelor in React pentru aplicatia PhoneRO.

**Descrierea interactiunii:**
1. **Adaugare interactiuni pe carduri:** Am cerut AI-ului sa imi adapteze componenta `TelefonCard.jsx` din etapa precedenta. Acesta a adaugat un `<input type="checkbox">` controlat si un buton de stergere pentru fiecare telefon.
2. **Prop Drilling:** AI-ul a actualizat `TelefonList.jsx` pentru a primi si a transmite functiile `onToggle` si `onDelete` de la parinte catre fiecare card individual.
3. **Implementare State (`useState`):** In fisierul principal `App.jsx`, am configurat memoria aplicatiei folosind `useState` atat pentru lista initiala de telefoane, cat si pentru starea temei (Dark Mode / Mod Luminos). Am creat functiile `handleToggle` (folosind metoda `map`) si `handleDelete` (folosind metoda `filter`) pentru a modifica starea listei in mod imutabil.
4. **Depanare erori si CSS:** Initial am incercat sa pornesc serverul din radacina proiectului, dar AI-ul m-a corectat sa folosesc `cd frontend` inainte de `npm run dev`. Ulterior, dupa implementarea Dark Mode-ului, am intampinat o problema vizuala: textul din carduri ramanea negru pe fundal negru. Am trimis un screenshot cu eroarea catre AI, iar acesta a identificat lipsa proprietatii `color: var(--text);` in clasa `.app-wrapper` din `App.css` si a reparat problema.