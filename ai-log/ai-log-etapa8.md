# Jurnal utilizare AI - Etapa 8

**Sarcina:** Împărțirea aplicației într-un Single Page Application cu mai multe pagini folosind React Router (listă, pagină de detaliu dinamică, pagină „Despre” și pagină 404), layout comun cu `<Outlet />` și organizarea stilurilor pe componente cu CSS Modules.

**Descrierea interactiunii:**
1. **Configurare React Router și stiluri globale:** Am instalat `react-router-dom`, am înfășurat aplicația în `<BrowserRouter>` în `src/main.jsx` și am mutat stilurile globale comune în `src/index.css` (eliminând `App.css`).
2. **Structură pe componente, constante și API:** Am creat `src/constants.js` pentru valorile fixe de stare și etichete, am adăugat funcția `fetchTelefon(id)` în `src/api.js` și am organizat componentele și paginile în `src/components/` și `src/pages/` împreună cu fișierele lor `*.module.css`.
3. **Layout comun și navigare fără reîncărcare:** Am implementat `Layout.jsx` cu antet, `NavLink` și `<Outlet />`, iar în `TelefonCard.jsx` am transformat titlul într-un link (`data-testid="item-link"`) către ruta `/telefoane/:id`.
4. **Pagină de detaliu, pagina „Despre” și pagina 404:** Am creat `TelefonDetaliuPage.jsx` folosind `useParams()` și încărcarea elementului după ID (inclusiv tratarea erorilor la ID-uri inexistente), `DesprePage.jsx` și `NotFoundPage.jsx` (`data-testid="not-found"`), conectate în harta rutelor din `src/App.jsx`.