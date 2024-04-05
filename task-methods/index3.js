let array = [13, 11, 130, 3, 103, 1, 0];
let maxOddElement = array[0];

for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 1 && maxOddElement < array[index]) {
        maxOddElement = array[index]
    }
}

console.log(maxOddElement);