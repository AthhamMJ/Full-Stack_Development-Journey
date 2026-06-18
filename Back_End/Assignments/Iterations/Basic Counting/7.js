function fact(number){
    let n = number
    let factorial = 1;
    do{
        factorial += n;
        n--;
    }
    while(n > 0){
        console.log(factorial)
    }
}
fact(5);