# Jurnal AI - Etapa 3 (Inițializare Vite și React)

**Dezvoltare și Depanare:**

1. **Ajustare Design Etapa 1:** Înainte de a trece la React, am solicitat asistentului AI să modifice `style.css`. Am implementat o schemă de culori negru-galben, am modificat grid-ul la `1fr 3fr` și am integrat clasa pentru banner-ul imaginii.
2. **Stilizare Banner:** Am cerut reducerea dimensiunii imaginii de tip banner și adăugarea unei rame personalizate (galbene, cu spațiere). AI-ul a furnizat clasele CSS corecte.
3. **Probleme inițializare Vite:** La rularea comenzilor de mutare a fișierelor și instalare Vite, am întâmpinat erori în terminal (`command not found` și șablon invalid `react~`) cauzate de caractere ascunse introduse prin copy-paste. AI-ul a identificat cauza și mi-a furnizat pașii exacți pentru a le tasta manual și a corecta folderele.
4. **Configurare React:** AI-ul m-a îndrumat să mut fișierele vechi în folderul `mockup/`, să șterg resursele demonstrative (SVG-uri, CSS-ul implicit Vite) și să integrez CSS-ul personalizat în `App.css`. Grid-ul a fost setat temporar la `1fr`.
5. **Integrare componentă:** Datele din Etapa 2 au fost introduse în componenta principală `App.jsx`, iar elementele HTML au fost transformate în sintaxă JSX (`className`, expresii JS).
6. **Rezolvare cale imagine:** Imaginea banner-ului nu se afișa. AI-ul mi-a indicat să o mut în interiorul folderului `frontend/public/` și să îi ajustez numele (fără spații) la `/bannersite.jpg` pentru a putea fi încărcată corect de Vite.