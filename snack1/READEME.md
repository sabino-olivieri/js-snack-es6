## Testo della consegna

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

## svolgimento

- [x] creo array di oggetti
- [x] creo weightMin = bikes[0].weight che conterrà il peso più basso
- [x] creo indexWeightMin = 0 che conterrà l'indice dell'oggetto con il peso più basso
- [x] creo ciclo for per leggere array bikes
- [x] creo variabile weight con destructuring dell'oggetto
    se weight < weightMin
    - savlo il peso in weightMin e l'indice in indexWeightMin
- [x] stampo

## Bonus

- [x] creo lighterBikes dove insersco le bici più leggere nel caso ci fossero più bici con lo stesso peso
- [x] creo stringa strPrint per la stampa
- [x] creo ciclo for per leggere array bikes
    - se weight === weightMax
        inserisco oggetto in lighterBikes
- se la lunghezza di lighterBikes è > 1
    - la stringa è plurale
    altrimenti
    - è singolare
-[x] stampo
