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
        weight: 6.5 
    },
    { 
        bikeName: "Scott Foil", 
        weight: 6.2 
    },
];

let weightMax = 0;
let indexWeightMax = 0;
let heavierBikes = [];
let strPrint = "";

const containerElem = document.querySelector(".container");

bikes.forEach((element, index) => {
    const {weight} = element;
    // console.log(weight);

    if (weight > weightMax) {
        weightMax = weight;
        indexWeightMax = index;
    }   

    
});

bikes.forEach((element) => {
    const {weight} = element;
    // console.log(weight);

    if (weight === weightMax) {
        heavierBikes.push(element);
    }   

    
});


strPrint = (heavierBikes.length > 1) ? ("Le bici più pesanti sono:") : ("La bici più pesante è:");

containerElem.innerHTML = `<h2>${strPrint}</h2>`;
const listElem = document.createElement("ul");

heavierBikes.forEach(element => {
    listElem.innerHTML += `<li>${element.bikeName} con il peso di: ${element.weight}kg</li>`
});

containerElem.append(listElem);


console.log(weightMax, indexWeightMax);