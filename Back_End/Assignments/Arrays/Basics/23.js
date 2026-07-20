function Minverstappen(){
    let numArray = [13, 6, 2, 7, 8, 4, 1, 10, 5, 9];
    let min = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if(min > numArray[i]){
            min = numArray[i];
        }
        else{
            continue;
        }
    }
    console.log(min)
}
Minverstappen();