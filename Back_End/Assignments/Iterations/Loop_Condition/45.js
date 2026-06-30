function main(){
    large(233456954);
}
function large(number){
    let min = 0;
    let large = true;
    for(let digit; number > 0;){
        digit = number % 10;
        if (digit > 0){
            min = digit;
        }
        // else{
        //     large = false;
        //     break;
        // }
        number = Math.floor(number / 10);
    }
    console.log(min)
}
main();