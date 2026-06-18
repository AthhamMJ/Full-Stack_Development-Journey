function multiply(number){
    let n = number;
    let mul = 1;
    for(let m = 1; m <= 16; m++){
        mul = m*n;
        console.log(m+" x " +n+ " = " +mul)
    }

}
multiply(9)