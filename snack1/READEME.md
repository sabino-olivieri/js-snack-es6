## Testo della consegna

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

## svolgimento

- [x] creo array di oggetti
- [x] creo weightMax = 0 che conterrà il peso più grande
- [x] creo indexWeightMax = 0 che conterrà l'indice dell'oggetto con il peso più alto
- [x] creo ciclo for per leggere array bikes
- [x] creo variabile weight con destructuring dell'oggetto
    se weight > weightMax
    - savlo il peso in weightMax e l'indice in indexWeightMax
- [x] stampo

## Bonus

- [x] creo heavierBikes dove insersco le bici più pesanti nel caso ci fossero più bici con lo stesso peso
- [x] creo stringa strPrint per la stampa
- [x] creo ciclo for per leggere array bikes
    - se weight === weightMax
        inserisco oggetto in heavierBikes
- se la lunghezza di heavierBikes è > 1
    - la stringa è plurale
    altrimenti
    - è singolare
-[x] stampo
