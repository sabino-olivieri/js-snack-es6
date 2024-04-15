const teams = [
    {
        teamsName: "Juventus FC",
        pointsMade: 0,
        fouls: 0,
    },

    {
        teamsName: "Inter",
        pointsMade: 0,
        fouls: 0,
    },

    {
        teamsName: "Milan",
        pointsMade: 0,
        fouls: 0,
    },

    {
        teamsName: "Napoli",
        pointsMade: 0,
        fouls: 0,
    },

    {
        teamsName: "Bologna",
        pointsMade: 0,
        fouls: 0,
    },
];

teams.forEach(element => {
    element.pointsMade = Math.floor(Math.random() * 101);
    element.fouls = Math.floor(Math.random() * 201);
});

console.log("Array Completo:", teams);


const newTeams = teams.map((curElem) => {
    const {teamsName, fouls} = curElem;

    // console.log(teamsName, fouls);

    const newObject = {
        teamsName,
        fouls
    }

    return newObject
});
console.log("Array con solo falli:", newTeams);