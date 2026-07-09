function Avarage(){
    let numArray = [13, 6, 2, 7, 8, 4, 1, 10, 5, 9];
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i]
    }
    console.log(sum/(numArray.length-1))
}
Avarage();