let array = [1, 2, 4, 5, 2, 5, 6, 7, 8, 9, 10, 9, 9];
let max = array[0];
let temp = array[0];
for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] > max){
        max = array[i];
        if(array[i] > array[j] && array[i] < max){
            temp = array[i];
        }
    }
    }
    
}
console.log(temp);