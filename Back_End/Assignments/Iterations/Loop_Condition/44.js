function large(number){
    let max = 0;
    let large = true;
    for(let digit; number > 0;){
        digit = number % 10;
        if (digit >= max){
            max = digit;
        }
        // else{
        //     large = false;
        //     break;
        // }
        number = Math.floor(number / 10);
    }
    console.log(max)
}
large(233456954);