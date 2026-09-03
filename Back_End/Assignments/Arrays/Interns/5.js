let array = [1, 2, 4, 5, 2, 5, 6, 7, 8, 9, 10, 9, 9];
let array2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let newArray = [];

for(let i = 0; i < array2.length; i++){
    newArray.push(array[i]);
    newArray.push(array2[i]);
}

console.log(newArray);