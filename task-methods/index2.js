let array = [13, 11, 130, 3, 103, 1, 0];
let minElement = array[0];
let maxElement = array[0];
let minElementIndex = 0;
let maxElementIndex = 0;

for (let index = 0; index < array.length; index++) {
    if (array[index] > maxElement) {
        maxElement = array[index];
        maxElementIndex = index;
    }
    else if (array[index] < minElement) {
        minElement = array[index];
        minElementIndex = index;
    }
}

if (maxElement == minElement) {
    console.log(`Ən böyük və ən kiçik elementlər bərabərdir`);
    console.log(array);
}
else {
    let max = array[maxElementIndex];
    array[maxElementIndex] = array[minElementIndex];
    array[minElementIndex] = max;
    console.log(array);
}