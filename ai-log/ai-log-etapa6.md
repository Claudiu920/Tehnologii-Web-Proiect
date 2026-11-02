# Jurnal utilizare AI - Etapa 6

**Sarcina:** Mutarea datelor din codul React pe un API REST local folosind `json-server` și gestionarea stărilor de încărcare și eroare prin `useEffect`.

**Descrierea interactiunii:**
1. **Configurare json-server și baza de date:** Am instalat pachetul `json-server` (versiunea fixă `0.17.4`)[cite: 25] și am creat fișierul `db.json`[cite: 25] în folderul `frontend/` cu o listă extinsă de telefoane. De asemenea, am adugat scriptul `"api"` în fișierul `package.json`[cite: 25].
2. **Creare modul API și variabile de mediu:** Am creat fișierul `api.js`[cite: 26] pentru a centraliza cererile HTTP folosind `fetch`, `async`/`await`[cite: 24, 25] și verificarea `res.ok`[cite: 24, 26]. Am adaugat și fișierul `.env.example`[cite: 27] pentru variabila `VITE_API_URL`[cite: 27].
3. **Implementare useEffect și stări multiple:** În `App.jsx`, am eliminat datele statice, înlocuindu-le cu un state inițial gol[cite: 27] și am adaugat stările `loading`[cite: 27] și `error`[cite: 27]. Am folosit `useEffect`[cite: 24, 27] pentru a prelua datele de la server la montarea componentei[cite: 24], incluzând mecanismul de curățare (`ignore`)[cite: 27] pentru a preveni cererile duble inutile[cite: 27].
4. **Tratarea interfeței pentru stări:** Am adaugat mesaje vizuale pentru momentul în care datele se încarcă (`Se încarcă...`)[cite: 25, 28] sau când serverul este oprit (mesaj de eroare ghidat)[cite: 28, 29] și am stilizat aceste secțiuni în `App.css`[cite: 28].