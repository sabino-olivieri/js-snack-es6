const arrayNum = [5, 9, 50, 68, 15, 64, 32, 75, 64, 85, 68, 98, 4]

const min = 5;

const max = 11;

const  arrayModified = newArrayFilter(arrayNum, min, max);



/**
 * Description crea nuovo array con elementi che hanno indice compreso tra min e max
 * @param {array} arrayToControl array da controllare
 * @param {number} indexMin indice minimo
 * @param {number} indexMax indice massimo
 * @returns {array}
 */
function newArrayFilter (arrayToControl, indexMin, indexMax) {

    const arrayMod = arrayToControl.filter((curItem, index) => {
        return index >= indexMin && index <=indexMax;
    });

    return arrayMod;

}

console.log(arrayModified);