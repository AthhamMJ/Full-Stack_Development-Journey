function Maxverstappen(){
    let numArray = [13, 6, 2, 7, 8, 4, 1, 10, 5, 9];
    let max = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if(max < numArray[i]){
            max = numArray[i];
        }
        else{
            continue;
        }
    }
    console.log(max)
}
Maxverstappen();