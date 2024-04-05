let array = [13, 11, 130, 103, 131];
let minElement = array[0];
let maxElement = array[0];
let sum = 0;

for (let index = 0; index < array.length; index++) {
    if (array[index] > maxElement) {
        maxElement = array[index];
    }
    else if (array[index] < minElement) {
        minElement = array[index];
    }
}

for (let index = 0; index < array.length; index++) {
    if (array[index] !== maxElement && array[index] !== minElement)
        sum += array[index]
}

console.log(sum);