const persone = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 25
    },
    {
        nome: "Giuseppe",
        cognome: "Verdi",
        eta: 30
    },
    {
        nome: "Maria",
        cognome: "Bianchi",
        eta: 22
    },
    {
        nome: "Michele",
        cognome: "Verdi",
        eta: 17
    }
];

const nuovoArray = persone.map((element) => {
    let stringa = element.eta >= 18 ? `${element.nome} ${element.cognome} può guidare` : `${element.nome} ${element.cognome } non può guidare`;
    
    return stringa;
});

console.log(nuovoArray);