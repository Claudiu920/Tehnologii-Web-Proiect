# Etapa 2: Jurnal AI

## Instrumente
- Gemini

## Conversatii
- [Link catre conversatie] (Generarea logicii in JavaScript pentru PhoneStore.)

## Cereri principale
### 1. Scrierea logicii imutabile pentru aplicatie
- Intrebat: Sa se creeze fisierul telefoane.js cu functiile imutabile necesare (map, filter, find, reduce) adaptate pentru magazinul de telefoane.
- Primit: Codul JS complet, incluzand validarea adaugarii si metodele de calculare corecta a unui nou ID.
- Schimbat sau respins: Variabilele si testele de cautare au fost adaptate numelor de telefoane (ex. "galaxy" in loc de "tema").

## Ce am invatat / ce nu a functionat
Am inteles importanta operatorului spread (`...`) pentru a nu modifica array-ul initial si metoda de a crea id-uri noi si corecte dupa o stergere, folosind metoda `reduce` (calculand maximul existent + 1 in loc sa ma bazez pe lungimea curenta a array-ului).