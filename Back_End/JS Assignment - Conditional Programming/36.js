function digit(number){
    let n = number;

    if (n > 99 & n < 1000){
        console.log("The Number Is 3 Digit: "+n);
    }
    else{
        console.log("The Number Is not 3 Digit: "+n);
    }
}
digit(1001);