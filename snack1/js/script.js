const bikes = [

    { 
        bikeName: "Cannondale SuperSix EVO Hi-Mod", 
        weight: 5.9 
    },
    { 
        bikeName: "Bianchi Oltre XR4", 
        weight: 7.2 
    },
    { 
        bikeName: "Trek Émonda SLR", 
        weight: 6.8 
    },
    { 
        bikeName: "Specialized S-Works Tarmac SL7", 
        weight: 6.7 
    },
    { 
        bikeName: "Giant TCR Advanced SL Disc", 
        weight: 7.2
    },
    { 
        bikeName: "Pinarello Dogma F12", 
        weight: 5.8 
    },
    { 
        bikeName: "Cervelo R5", 
        weight: 6.4 
    },
    { 
        bikeName: "BMC Roadmachine SLR01", 
        weight: 6.3 
    },
    { 
        bikeName: "Orbea Oca", 
        weight: 5.8 
    },
    { 
        bikeName: "Scott Foil", 
        weight: 6.2 
    },
];

let weightMin = bikes[0].weight;
let indexWeightMin = 0;
let lighterBikes = [];
let strPrint = "";

const containerElem = document.querySelector(".container");

bikes.forEach((element, index) => {
    const {weight} = element;
    // console.log(weight);

    if (weight < weightMin) {
        weightMin = weight;
        indexWeightMin = index;
    }   

    
});

bikes.forEach((element) => {
    const {weight} = element;
    // console.log(weight);

    if (weight === weightMin) {
        lighterBikes.push(element);
    }   

    
});


strPrint = (lighterBikes.length > 1) ? ("Le bici più leggere sono:") : ("La bici più leggera è:");

containerElem.innerHTML = `<h2>${strPrint}</h2>`;
const listElem = document.createElement("ul");

lighterBikes.forEach(element => {
    listElem.innerHTML += `<li>${element.bikeName} con il peso di: ${element.weight}kg</li>`
});

containerElem.append(listElem);


console.log(weightMin, indexWeightMin);